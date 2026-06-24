import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { profile } from "@/lib/data";

const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: 10,
  fontFamily: "var(--font-mono), monospace",
  fontSize: 13,
};
const keyStyle: React.CSSProperties = {
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#8a857c",
  fontSize: 11,
  flex: "none",
  width: 74,
};
const valStyle: React.CSSProperties = { color: "#e8e5df", wordBreak: "break-all" };
const divider: React.CSSProperties = {
  height: 1,
  background: "rgba(255,255,255,0.07)",
};

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ paddingBottom: "var(--section-pad)", scrollMarginTop: 90 }}
    >
      <Reveal
        style={{
          background: "#171511",
          borderRadius: 24,
          padding: "64px 56px",
          color: "#f4f2ee",
          position: "relative",
          overflow: "hidden",
        }}
        className="contact-card"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(600px 300px at 80% 0%, var(--accent-softer), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <div
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 12.5,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#9b96b8",
              marginBottom: 18,
            }}
          >
            Let&apos;s talk
          </div>
          <h2
            className="contact-title"
            style={{
              fontSize: 42,
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              maxWidth: 640,
            }}
          >
            Looking for an engineer who ships. Let&apos;s build something?
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "#bdb8b0",
              marginTop: 20,
              maxWidth: 640,
            }}
          >
            {profile.intro}
          </p>

          <div className="contact-grid">
            <div>
              <ContactForm />
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 18,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <div style={rowStyle}>
                <span style={keyStyle}>Location</span>
                <span style={valStyle}>{profile.location}</span>
              </div>
              <div style={divider} />
              <a
                href={`mailto:${profile.email}`}
                style={rowStyle}
                className="contact-link"
              >
                <span style={keyStyle}>Email</span>
                <span style={valStyle}>{profile.email}</span>
              </a>
              <div style={divider} />
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={rowStyle}
                className="contact-link"
              >
                <span style={keyStyle}>GitHub</span>
                <span style={valStyle}>{profile.github}</span>
              </a>
              <div style={divider} />
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={rowStyle}
                className="contact-link"
              >
                <span style={keyStyle}>LinkedIn</span>
                <span style={valStyle}>{profile.linkedin}</span>
              </a>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(124,108,255,0.16)",
                  color: "#b9adff",
                  padding: "9px 14px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 600,
                  marginTop: 8,
                  alignSelf: "flex-start",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#16a34a",
                    boxShadow: "0 0 0 3px rgba(22,163,74,.22)",
                  }}
                />
                {profile.availability}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
