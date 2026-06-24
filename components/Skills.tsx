import Reveal from "./Reveal";
import { SkillChip } from "./Chip";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ paddingBottom: "var(--section-pad)", scrollMarginTop: 90 }}
    >
      <Reveal style={{ marginBottom: 40 }}>
        <h2 className="section-title">Technical skills</h2>
      </Reveal>

      <div className="card-grid">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i % 2 === 1 ? 80 : 0}
            className="skill-card"
          >
            <h3
              style={{
                fontSize: 16,
                fontWeight: 700,
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  background: "var(--accent)",
                }}
              />
              {group.title}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {group.skills.map((s) => (
                <SkillChip key={s}>{s}</SkillChip>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
