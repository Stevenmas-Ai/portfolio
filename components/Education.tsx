import Reveal from "./Reveal";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      style={{ paddingBottom: "var(--section-pad)", scrollMarginTop: 90 }}
    >
      <div className="edu-grid">
        {/* Education column */}
        <div>
          <Reveal style={{ marginBottom: 28 }}>
            <h2 className="section-title">Education</h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {education.map((e, i) => (
              <Reveal
                key={e.degree}
                delay={i === 1 ? 80 : 0}
                style={{
                  background: "#fff",
                  border: "1px solid #ece9e3",
                  borderRadius: 16,
                  padding: 26,
                  boxShadow: "0 1px 3px rgba(0,0,0,.04)",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={e.logo}
                  alt={e.school}
                  style={{
                    flex: "none",
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    objectFit: "cover",
                    background: "#f5f3ee",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: 8,
                    }}
                  >
                    <h3 style={{ fontSize: 18, fontWeight: 700 }}>{e.degree}</h3>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: 12.5,
                        color: "#a39e94",
                      }}
                    >
                      {e.date}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--accent)",
                      fontWeight: 600,
                      marginTop: 4,
                    }}
                  >
                    {e.school}
                  </div>
                  <div style={{ fontSize: 13.5, color: "#7c776e", marginTop: 8 }}>
                    {e.detail}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications column */}
        <div>
          <Reveal style={{ marginBottom: 28 }}>
            <h2 className="section-title">Certifications</h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {certifications.map((c, i) => (
              <Reveal
                key={c.title}
                as="a"
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                delay={i === 1 ? 80 : 0}
                className="cert-card"
                style={{
                  background: "var(--accent-soft)",
                  border: "1px solid var(--accent-softer)",
                  borderRadius: 16,
                  padding: 22,
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt="AWS"
                  style={{ flex: "none", width: 48, height: 38, objectFit: "contain" }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: 8,
                    }}
                  >
                    <h3 style={{ fontSize: 15.5, fontWeight: 700, lineHeight: 1.3 }}>
                      {c.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: 12.5,
                        color: "#a39e94",
                      }}
                    >
                      {c.date}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--accent)",
                      fontWeight: 600,
                      marginTop: 4,
                    }}
                  >
                    {c.issuer}
                  </div>
                  <div style={{ fontSize: 12.5, color: "var(--accent)", fontWeight: 600, marginTop: 8 }}>
                    View credential →
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
