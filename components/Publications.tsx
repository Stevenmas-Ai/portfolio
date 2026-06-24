import Reveal from "./Reveal";
import { publications } from "@/lib/data";

function PaperIcon() {
  return (
    <span
      style={{
        flex: "none",
        marginTop: 4,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 46,
        height: 46,
        borderRadius: 11,
        background: "var(--accent-soft)",
        color: "var(--accent)",
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    </span>
  );
}

export default function Publications() {
  return (
    <section
      id="publications"
      style={{ paddingBottom: "var(--section-pad)", scrollMarginTop: 90 }}
    >
      <Reveal style={{ marginBottom: 40 }}>
        <h2 className="section-title">Publications</h2>
      </Reveal>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {publications.map((p) => (
          <Reveal
            key={p.title}
            as="a"
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-card"
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
              <PaperIcon />
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
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      lineHeight: 1.35,
                      maxWidth: "80%",
                    }}
                  >
                    {p.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 12.5,
                      color: "#a39e94",
                      flex: "none",
                    }}
                  >
                    {p.date}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.55,
                    color: "#7c776e",
                    fontStyle: "italic",
                    marginTop: 8,
                  }}
                >
                  {p.venue}
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "#57534b", marginTop: 12 }}>
                  {p.detail}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 12.5,
                    color: "var(--accent)",
                    fontWeight: 600,
                    marginTop: 14,
                  }}
                >
                  View on IEEE Xplore →
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
