import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";

// Validate the payload coming from the contact form.
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(200),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  // 1. Parse + validate
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Please check your input.";
    return NextResponse.json({ error: first }, { status: 400 });
  }
  const { name, email, subject, message } = parsed.data;
  const emailSubject =
    subject && subject.length > 0
      ? subject
      : `Portfolio contact from ${name}`;

  // 2. Best-effort backup to Supabase (never blocks the email)
  const supabase = getSupabaseAdmin();
  if (supabase) {
    try {
      await supabase.from("contacts").insert({ name, email, message });
    } catch (err) {
      console.error("Supabase insert failed:", err);
    }
  }

  // 3. Send the email via Resend
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL || "stevenmasdev@gmail.com",
      replyTo: email,
      subject: emailSubject,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#1c1a16">
          <h2 style="margin:0 0 12px">New portfolio message</h2>
          <p style="margin:0"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0"><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${subject ? `<p style="margin:0"><strong>Subject:</strong> ${escapeHtml(subject)}</p>` : ""}
          <hr style="border:none;border-top:1px solid #ece9e3;margin:16px 0" />
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Resend send failed:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please email directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}