import "../style_css/services.css";

const services = [
  {
    icon: "web.png",
    title: "Web Development",
    text: "Fast, modern and secure websites for your business.",
  },
  {
    icon: "smartphone.png",
    title: "Mobile Apps",
    text: "Android and iOS apps with smooth user experience.",
  },
  {
    icon: "cloud.png",
    title: "Cloud Solutions",
    text: "Hosting, migration and scalable cloud setup.",
  },
  {
    icon: "ui.png",
    title: "UI/UX Design",
    text: "Clean and attractive designs that users love.",
  },
  {
    icon: "microchip.png",
    title: "AI and Data",
    text: "Smart automation and data analytics for decisions.",
  },
  {
    icon: "cyber-security.png",
    title: "Cyber Security",
    text: "Protect your systems, data and customers.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <h2>
        What We <span>Provide</span>
      </h2>

      <p className="sub">
        Everything your business needs to grow online.
      </p>

      <div className="grid">
        {services.map((s) => (
          <div className="card" key={s.title}>
            <div className="icon">
              <img
                src={`${process.env.PUBLIC_URL}/images/provide/${s.icon}`}
                alt={`${s.title} icon`}
              />
            </div>

            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}