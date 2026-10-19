import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
}

const asTrimmed = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

/**
 * Emails contact-form submissions through Resend.
 * Requires RESEND_API_KEY and CONTACT_TO_EMAIL (optionally CONTACT_FROM_EMAIL).
 * See CLAUDE.md → "Environment variables".
 */
export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see this field. Pretend success to bots.
  if (asTrimmed(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = asTrimmed(body.name, 100);
  const email = asTrimmed(body.email, 200);
  const message = asTrimmed(body.message, 5000);

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY / CONTACT_TO_EMAIL are not set.");
    return NextResponse.json(
      { error: "Messages can't be sent right now. Please try again later." },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Lisa Marie Photography <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error("Contact form: Resend responded", response.status, await response.text());
    return NextResponse.json(
      { error: "Your message couldn't be sent. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
