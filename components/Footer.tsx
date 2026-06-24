import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #ece9e3", marginTop: 40 }}>
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "32px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 13.5, color: "#7c776e" }}>
          © {profile.fullName} · {profile.location}
        </span>
        <span
          style={{
            fontSize: 13.5,
            color: "#7c776e",
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          Building with Passion and Purpose!
        </span>
      </div>
    </footer>
  );
}
