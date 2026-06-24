import Reveal from "./Reveal";
import { experience } from "@/lib/data";

function TimelineDot({ filled, last }: { filled: boolean; last: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: filled ? 6 : 0,
      }}
    >
      <span
        style={
          filled
            ? {
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 0 4px var(--accent-soft)",
              }
            : {
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#fff",
                border: "2px solid var(--accent)",
              }
        }
      />
      {!last && (
        <span
          style={{
            flex: 1,
            width: 2,
            background: "#e6e2da",
            margin: "6px 0",
          }}
        />
      )}
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{ paddingBottom: "var(--section-pad)", scrollMarginTop: 90 }}
    >
      <Reveal style={{ marginBottom: 40 }}>
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 12.5,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 12,
          }}
        >
          Experience
        </div>
        <h2 className="section-title">Where I&apos;ve built</h2>
      </Reveal>

      <div className="timeline-grid">
        {experience.map((job, i) => {
          const last = i === experience.length - 1;
          return (
            <div key={job.role} style={{ display: "contents" }}>
              <TimelineDot filled={i === 0} last={last} />
              <Reveal style={{ paddingBottom: last ? 0 : 44 }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 8,
                  }}
                >
                  <h3 style={{ fontSize: 19, fontWeight: 700 }}>{job.role}</h3>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 12.5,
                      color: "#a39e94",
                    }}
                  >
                    {job.date}
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
                  {job.org}
                </div>
                {job.summary && (
                  <p
                    style={{
                      fontSize: 14,
                      color: "#7c776e",
                      marginTop: 8,
                      fontStyle: "italic",
                    }}
                  >
                    {job.summary}
                  </p>
                )}
                <ul
                  style={{
                    marginTop: job.summary ? 12 : 14,
                    display: "flex",
                    flexDirection: "column",
                    gap: 9,
                    listStyle: "none",
                  }}
                >
                  {job.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.55,
                        color: "#57534b",
                        paddingLeft: 18,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 9,
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "#c8c2b6",
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
