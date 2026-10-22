import "../style_css/ecosystem.css";

const groups = [
  { name: "Frontend", tech: ["React", "Next.js", "Vue", "Tailwind"] },
  { name: "Backend", tech: ["Node.js", "Laravel", "Python", ".NET"] },
  { name: "Mobile", tech: ["Flutter", "React Native", "Kotlin", "Swift"] },
  { name: "Database", tech: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  { name: "Cloud and Tools", tech: ["AWS", "Azure", "Docker", "Figma"] },
];

export default function Ecosystem() {
  return (
    <section className="ec-section" id="ecosystem">
      <h2>Ecosystem and <span>Platforms</span></h2>
      <p className="ec-sub">
        Modern, developer-friendly and enterprise-grade technologies.
      </p>

      <div className="ec-wrap">
        {groups.map((g) => (
          <div className="ec-group" key={g.name}>
            <h4>{g.name}</h4>
            <div className="ec-tags">
              {g.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}