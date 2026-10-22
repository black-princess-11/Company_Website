import "../style_css/domain.css";

const domains = [
  {
    icon: "web.png",
    title: "Web Development",
    stack: ["React", "Node.js", "PHP", "Laravel"],
  },
  {
    icon: "smartphone.png",
    title: "Mobile App",
    stack: ["Flutter", "React Native", "Kotlin", "Swift"],
  },
  {
    icon: "ux.png",
    title: "Windows / Desktop",
    stack: [".NET", "Electron", "Java", "C++"],
  },
  {
    icon: "protect.png",
    title: "Enterprise Solutions",
    stack: ["ERP", "CRM", "SAP", "Odoo"],
  },
  {
    icon: "ui.png",
    title: "UI/UX Design",
    stack: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    icon: "cloud.png",
    title: "Cloud and DevOps",
    stack: ["AWS", "Azure", "Docker", "CI/CD"],
  },
];

export default function Domains() {
  return (
    <section className="dm-section" id="domains">
      <h2>
        Our Specialized <span>IT Domains</span>
      </h2>

      <p className="dm-sub">
        Expert delivery across specialized domains. Each one uses a proven
        technology stack.
      </p>

      <div className="dm-grid">
        {domains.map((d) => (
          <div className="dm-card" key={d.title}>
            <div className="dm-icon">
              <img
                src={`${process.env.PUBLIC_URL}/images/domain/${d.icon}`}
                alt={d.title}
              />
            </div>

            <h3>{d.title}</h3>

            <div className="dm-tags">
              {d.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}