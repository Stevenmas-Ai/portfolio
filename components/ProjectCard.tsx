import Reveal from "./Reveal";
import { Chip } from "./Chip";
import type { Project } from "@/lib/data";

function Badge({ badge }: { badge: NonNullable<Project["badge"]> }) {
  const winner = badge.tone === "winner";
  return (
    <span
      style={{
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: winner ? "#16a34a" : "var(--accent)",
        background: winner ? "rgba(22,163,74,0.12)" : "var(--accent-soft)",
        padding: "6px 11px",
        borderRadius: 7,
      }}
    >
      {badge.label}
    </span>
  );
}

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  const hasBadge = !!project.badge;

  return (
    <Reveal
      as="a"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      delay={delay}
      className="project-card"
    >
      {/* Top row: badge + date, OR title + date */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
        }}
      >
        {hasBadge ? (
          <Badge badge={project.badge!} />
        ) : (
          <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}>
            {project.title}
          </h3>
        )}
        <span
          style={{
            fontSize: 12.5,
            color: "#a39e94",
            fontFamily: "var(--font-mono), monospace",
            flex: "none",
          }}
        >
          {project.date}
        </span>
      </div>

      {/* Cover image */}
      <div style={{ height: 140, borderRadius: 12, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.cover}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: project.coverPosition || "50% 50%",
            display: "block",
          }}
        />
      </div>

      {/* Title (only when a badge took the top row) */}
      {hasBadge && (
        <h3 style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-0.01em" }}>
          {project.title}
        </h3>
      )}

      {project.subtitle && (
        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.55,
            color: "#7c776e",
            fontStyle: "italic",
          }}
        >
          {project.subtitle}
        </p>
      )}

      <ul style={{ display: "flex", flexDirection: "column", gap: 9, listStyle: "none" }}>
        {project.bullets.map((b, i) => (
          <li
            key={i}
            style={{
              fontSize: 13.5,
              lineHeight: 1.55,
              color: "#57534b",
              paddingLeft: 16,
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 8,
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "#c8c2b6",
              }}
            />
            {b}
          </li>
        ))}
      </ul>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 7,
          marginTop: "auto",
          paddingTop: 6,
        }}
      >
        {project.tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </Reveal>
  );
}
