import "../style_css/enterprise.css";

const items = [
  {
    icon: "cloud.png",
    title: "Cloud and DevOps",
    text: "Secure, scalable infrastructure with automated deployment pipelines.",
  },
  {
    icon: "protect.png",
    title: "Enterprise Middleware",
    text: "Custom integration layers that connect your existing systems.",
  },
  {
    icon: "microchip.png",
    title: "AI and Automation",
    text: "Smart workflows and chatbots that save time and cost.",
  },
  {
    icon: "data-governance.png",
    title: "Data Analytics and BI",
    text: "Dashboards and reports that turn data into decisions.",
  },
];

export default function Enterprise() {
  return (
    <section className="en-section" id="enterprise">
      <span className="en-badge">Technical Services</span>

      <h2>
        Enterprise IT <span>Capabilities</span>
      </h2>

      <p className="en-sub">
        We build reliable, secure and intelligent systems for growing
        businesses.
      </p>

      <div className="en-grid">
        {items.map((i) => (
          <div className="en-card" key={i.title}>
            <div className="en-icon">
              <img
                src={`${process.env.PUBLIC_URL}/images/enterprise/${i.icon}`}
                alt={`${i.title} icon`}
              />
            </div>

            <h3>{i.title}</h3>
            <p>{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}