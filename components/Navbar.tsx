import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "saturate(180%) blur(12px)",
        WebkitBackdropFilter: "saturate(180%) blur(12px)",
        background: "rgba(250,249,247,0.82)",
        borderBottom: "1px solid #ece9e3",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        <a
          href="#top"
          style={{ display: "flex", alignItems: "center", gap: 10, flex: "none" }}
        >
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: 8,
              background: "var(--accent)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 13,
              flex: "none",
            }}
          >
            {profile.initials}
          </span>
          <span style={{ fontWeight: 700, fontSize: 15, whiteSpace: "nowrap" }}>
            {profile.name}
          </span>
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
            fontSize: 14,
            color: "#57534b",
            fontWeight: 500,
          }}
          className="nav-links"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "var(--accent)",
              color: "#fff",
              padding: "9px 16px",
              borderRadius: 9,
              fontWeight: 600,
              whiteSpace: "nowrap",
              flex: "none",
            }}
            className="resume-btn"
          >
            Resume / CV
          </a>
        </div>
      </div>
    </nav>
  );
}