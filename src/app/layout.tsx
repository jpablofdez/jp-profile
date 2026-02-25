import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan Pablo Fernandez Delgado | Cloud Software Engineer",
  description:
    "Professional profile of Juan Pablo Fernandez Delgado: Cloud Software Engineer and DevOps specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
