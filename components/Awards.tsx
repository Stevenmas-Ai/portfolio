import Reveal from "./Reveal";
import { awards } from "@/lib/data";

export default function Awards() {
  return (
    <section
      id="awards"
      style={{ paddingBottom: "var(--section-pad)", scrollMarginTop: 90 }}
    >
      <Reveal style={{ marginBottom: 40 }}>
        <h2 className="section-title">Awards &amp; Extracurricular</h2>
      </Reveal>

      <Reveal
        style={{
          background: "#fff",
          border: "1px solid #ece9e3",
          borderRadius: 16,
          boxShadow: "0 1px 3px rgba(0,0,0,.04)",
          overflow: "hidden",
        }}
      >
        {awards.map((a, i) => (
          <div
            key={a.title}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
              padding: "22px 26px",
              borderBottom: i === awards.length - 1 ? "none" : "1px solid #f1efe9",
            }}
          >
            <span
              style={{
                flex: "none",
                marginTop: 7,
                width: 8,
                height: 8,
                borderRadius: 2,
                background: "var(--accent)",
              }}
            />
            <div
              style={{
                flex: 1,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <div style={{ maxWidth: "74%" }}>
                <span style={{ fontSize: 15.5, fontWeight: 700, color: "#1c1a16" }}>
                  {a.title}
                </span>
                <span style={{ fontSize: 14, color: "#7c776e" }}> · {a.detail}</span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 12.5,
                  color: "#a39e94",
                }}
              >
                {a.date}
              </span>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
