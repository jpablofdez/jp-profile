import { NextResponse } from "next/server";
import { digitalTwinContext } from "@/lib/profile-data";

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

type OpenRouterTextPart = {
  type?: string;
  text?: string;
};

type OpenRouterPayload = {
  choices?: Array<{
    message?: {
      content?: string | OpenRouterTextPart[];
    };
  }>;
  error?: {
    message?: string;
  };
};

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "openai/gpt-oss-120b:free";
const MAX_MESSAGES = 12;

const systemPrompt = `
You are the digital twin of Juan Pablo Fernandez Delgado.

Rules:
- Answer as a professional AI career representative of Juan Pablo.
- Only use facts from the provided profile context.
- If information is not in the profile, say that clearly and suggest the user check directly with Juan Pablo.
- Keep answers concise, factual, and enterprise-professional.
- Do not invent projects, job titles, dates, or certifications.

Profile Context:
${digitalTwinContext}
`;

function sanitizeMessages(input: unknown): IncomingMessage[] {
  if (!Array.isArray(input)) {
    return [];
  }

  return input
    .filter((item): item is IncomingMessage => {
      return (
        typeof item === "object" &&
        item !== null &&
        "role" in item &&
        "content" in item &&
        (item.role === "user" || item.role === "assistant") &&
        typeof item.content === "string"
      );
    })
    .map((item) => ({
      role: item.role,
      content: item.content.trim().slice(0, 2000),
    }))
    .filter((item) => item.content.length > 0)
    .slice(-MAX_MESSAGES);
}

function extractReply(payload: OpenRouterPayload | null): string {
  const content = payload?.choices?.[0]?.message?.content;

  if (typeof content === "string") {
    return content.trim();
  }

  if (Array.isArray(content)) {
    return content
      .filter(
        (
          part,
        ): part is OpenRouterTextPart & {
          type: "text";
          text: string;
        } => {
          return (
            part !== null &&
            typeof part === "object" &&
            part.type === "text" &&
            typeof part.text === "string"
          );
        },
      )
      .map((part) => part.text.trim())
      .filter(Boolean)
      .join("\n")
      .trim();
  }

  return "";
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENROUTER_API_KEY is missing in environment variables." },
      { status: 500 },
    );
  }

  let body: { messages?: IncomingMessage[] };

  try {
    body = (await request.json()) as { messages?: IncomingMessage[] };
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = sanitizeMessages(body.messages);
  const hasUserMessage = messages.some((message) => message.role === "user");

  if (!hasUserMessage) {
    return NextResponse.json(
      { error: "Please provide at least one user message." },
      { status: 400 },
    );
  }

  try {
    const upstreamResponse = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:3000",
        "X-Title": "Juan Pablo Career Digital Twin",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        temperature: 0.2,
      }),
    });

    const payload = (await upstreamResponse.json().catch(() => null)) as
      | OpenRouterPayload
      | null;

    if (!upstreamResponse.ok) {
      if (upstreamResponse.status === 429) {
        return NextResponse.json(
          {
            error:
              "OpenRouter free model is currently rate-limited. Please retry in a moment.",
          },
          { status: 429 },
        );
      }

      const upstreamError = payload?.error?.message || "OpenRouter request failed.";
      return NextResponse.json({ error: upstreamError }, { status: upstreamResponse.status });
    }

    const reply = extractReply(payload);

    if (!reply) {
      return NextResponse.json(
        { error: "OpenRouter returned an empty response." },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Unable to contact OpenRouter at this time." },
      { status: 502 },
    );
  }
}
