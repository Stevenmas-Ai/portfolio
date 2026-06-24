import Reveal from "./Reveal";
import { volunteering } from "@/lib/data";

export default function Volunteering() {
  return (
    <section
      id="volunteering"
      style={{ paddingBottom: "var(--section-pad)", scrollMarginTop: 90 }}
    >
      <Reveal style={{ marginBottom: 40 }}>
        <h2 className="section-title">Volunteering</h2>
      </Reveal>

      <div className="timeline-grid">
        {volunteering.map((v) => (
          <div key={v.role} style={{ display: "contents" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 6,
              }}
            >
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  boxShadow: "0 0 0 4px var(--accent-soft)",
                }}
              />
            </div>
            <Reveal style={{ paddingBottom: 44 }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <h3 style={{ fontSize: 19, fontWeight: 700 }}>{v.role}</h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: 12.5,
                    color: "#a39e94",
                  }}
                >
                  {v.date}
                </span>
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--accent)",
                  fontWeight: 600,
                  marginTop: 3,
                }}
              >
                {v.org}
              </div>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.55,
                  color: "#57534b",
                  marginTop: 12,
                }}
              >
                {v.detail}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
