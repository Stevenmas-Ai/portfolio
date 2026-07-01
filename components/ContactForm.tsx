"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

type Status = { state: "idle" | "loading" | "ok" | "error"; message?: string };

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.16)",
  color: "#f4f2ee",
  padding: "12px 16px",
  borderRadius: 9,
  fontSize: 15,
  fontFamily: "inherit",
};
const labelStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#f4f2ee",
};
const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
    };

    setStatus({ state: "loading", message: "Sending..." });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus({
          state: "ok",
          message: "✓ Message sent! I'll get back to you soon.",
        });
        form.reset();
        setTimeout(() => setStatus({ state: "idle" }), 4000);
      } else {
        throw new Error(json.error || "Failed to send message");
      }
    } catch (err) {
      setStatus({
        state: "error",
        message:
          "✗ " +
          ((err as Error).message ||
            "Error sending message. Try emailing directly."),
      });
    }
  }

  const loading = status.state === "loading";
  const statusColor =
    status.state === "ok"
      ? "#16a34a"
      : status.state === "error"
        ? "#ff6b6b"
        : "#bdb8b0";

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <div style={fieldStyle}>
        <label htmlFor="name" style={labelStyle}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
          style={inputStyle}
        />
      </div>
      <div style={fieldStyle}>
        <label htmlFor="email" style={labelStyle}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your@email.com"
          style={inputStyle}
        />
      </div>
      <div style={fieldStyle}>
        <label htmlFor="message" style={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Your message..."
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="send-btn"
        style={{
          background: "var(--accent)",
          color: "#fff",
          padding: "14px 24px",
          borderRadius: 11,
          fontWeight: 600,
          fontSize: 15,
          border: "none",
          cursor: loading ? "default" : "pointer",
          alignSelf: "flex-start",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "Sending..." : "Send message"}
      </button>
      {status.message && (
        <div style={{ fontSize: 13, color: statusColor, marginTop: 8 }}>
          {status.message}
        </div>
      )}
      <noscript>
        <p style={{ fontSize: 13, color: "#bdb8b0" }}>
          Enable JavaScript or email {profile.email} directly.
        </p>
      </noscript>
    </form>
  );
}
