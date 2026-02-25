"use client";

import { FormEvent, useMemo, useState } from "react";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const starterMessage: ChatMessage = {
  role: "assistant",
  content:
    "I am Juan Pablo's digital twin. Ask me about his cloud, DevOps, security, and career experience.",
};

const suggestedQuestions = [
  "What are Juan Pablo's strongest GCP skills?",
  "Tell me about his experience with Okta and Auth0.",
  "What business impact has he delivered in DevOps roles?",
];

const MAX_CONTEXT_MESSAGES = 12;

export function DigitalTwinChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([starterMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSend = useMemo(
    () => input.trim().length > 0 && !isLoading,
    [input, isLoading],
  );

  async function sendUserMessage(content: string) {
    const trimmed = content.trim();
    if (!trimmed || isLoading) {
      return;
    }

    setError(null);

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/digital-twin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages.slice(-MAX_CONTEXT_MESSAGES),
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { reply?: string; error?: string }
        | null;

      if (!response.ok) {
        throw new Error(payload?.error || "Could not get a response from the digital twin.");
      }

      const reply = payload?.reply?.trim();
      if (!reply) {
        throw new Error("The digital twin returned an empty response.");
      }

      setMessages((current) => [...current, { role: "assistant", content: reply }]);
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : "Unexpected error while contacting the digital twin.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendUserMessage(input);
  }

  return (
    <section id="digital-twin" className="reveal section-panel section-delay-4">
      <div className="section-heading">
        <p className="eyebrow">AI Digital Twin</p>
        <h2>Ask career questions in real time.</h2>
      </div>

      <p className="section-text">
        This assistant is grounded in Juan Pablo&apos;s profile and answers questions
        about his experience in GCP, Okta security, DevOps, and enterprise delivery.
      </p>

      <div className="chat-shell">
        <div className="chat-suggestions">
          {suggestedQuestions.map((question) => (
            <button
              key={question}
              type="button"
              className="chat-chip"
              onClick={() => void sendUserMessage(question)}
              disabled={isLoading}
            >
              {question}
            </button>
          ))}
        </div>

        <div className="chat-log" aria-live="polite">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={
                message.role === "user" ? "chat-message chat-user" : "chat-message chat-assistant"
              }
            >
              <p className="chat-role">{message.role === "user" ? "You" : "Digital Twin"}</p>
              <p className="chat-content">{message.content}</p>
            </div>
          ))}

          {isLoading && (
            <div className="chat-message chat-assistant">
              <p className="chat-role">Digital Twin</p>
              <p className="chat-content">Thinking...</p>
            </div>
          )}
        </div>

        <form className="chat-form" onSubmit={onSubmit}>
          <label htmlFor="digital-twin-input" className="sr-only">
            Ask the digital twin about career experience
          </label>
          <textarea
            id="digital-twin-input"
            className="chat-input"
            placeholder="Ask about career journey, certifications, cloud skills, security, or impact..."
            rows={3}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={isLoading}
          />
          <div className="chat-form-row">
            <p className="chat-note">Powered by OpenRouter</p>
            <button type="submit" className="btn-primary" disabled={!canSend}>
              Send
            </button>
          </div>
        </form>

        {error && <p className="chat-error">{error}</p>}
      </div>
    </section>
  );
}
