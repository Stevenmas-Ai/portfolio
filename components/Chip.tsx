import type { CSSProperties } from "react";

/** Small tech-tag chip used in project cards. */
export function Chip({ children }: { children: string }) {
  const style: CSSProperties = {
    fontSize: 12,
    color: "#57534b",
    background: "#f3f1ec",
    padding: "5px 11px",
    borderRadius: 7,
  };
  return <span style={style}>{children}</span>;
}

/** Larger skill chip used in the Skills section. */
export function SkillChip({ children }: { children: string }) {
  const style: CSSProperties = {
    fontSize: 12.5,
    color: "#43403a",
    background: "#f5f3ee",
    padding: "6px 12px",
    borderRadius: 8,
  };
  return <span style={style}>{children}</span>;
}
