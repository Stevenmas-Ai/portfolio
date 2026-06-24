import Image from "next/image";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

const monoRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
};
const monoLabel: React.CSSProperties = {
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#a39e94",
  fontWeight: 600,
};

export default function Hero() {
  return (
    <section id="top" style={{ padding: "96px 0 var(--section-pad)" }}>
      <div className="hero-grid">
        <div style={{ maxWidth: 640 }}>
          <Reveal delay={60}>
            <h1
              style={{
                fontSize: 56,
                lineHeight: 1.04,
                fontWeight: 800,
                letterSpacing: "-0.035em",
                color: "#171511",
              }}
              className="hero-title"
            >
              {profile.headline}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.62,
                color: "#57534b",
                marginTop: 24,
                maxWidth: 540,
              }}
            >
              {profile.intro}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 32,
              }}
            >
              <a href="#projects" className="btn btn-primary">
                View featured work
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
              <a href={profile.resumeUrl} download className="btn btn-ghost">
                Download my Resume / CV
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div style={{ justifySelf: "center", position: "relative", zIndex: 1 }}>
            <div
              style={{
                position: "absolute",
                inset: -24,
                borderRadius: 32,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.3)",
                zIndex: -1,
              }}
            />
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: 24,
                  overflow: "hidden",
                  border: "1px solid #ece9e3",
                  boxShadow: "0 20px 50px rgba(0,0,0,.12)",
                  zIndex: 1,
                }}
              >
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  width={300}
                  height={300}
                  priority
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 12,
                  color: "#7c776e",
                  textAlign: "center",
                  padding: "0 16px",
                }}
              >
                <div style={monoRow}>
                  <span style={monoLabel}>Location</span>
                  <span>{profile.location}</span>
                </div>
                <div style={monoRow}>
                  <span style={monoLabel}>Email</span>
                  <span>{profile.email}</span>
                </div>
                <div style={monoRow}>
                  <span style={monoLabel}>GitHub</span>
                  <span>{profile.github}</span>
                </div>
                <div style={monoRow}>
                  <span style={monoLabel}>LinkedIn</span>
                  <span>{profile.linkedin}</span>
                </div>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  padding: "8px 14px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 600,
                  marginTop: 8,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#16a34a",
                    boxShadow: "0 0 0 3px rgba(22,163,74,.18)",
                  }}
                />
                {profile.availability}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
