import { useState } from "react";
import "../style_css/team.css";

const team = [
  {
    name: "Aarav Sharma", role: "Founder and CEO", exp: "10+ yrs", img: "boy.jpg",
    bio: "Leads strategy and client relations. Turns business ideas into scalable digital products.",
    skills: ["Strategy", "Product", "Leadership"],
    linkedin: "https://www.linkedin.com", email: "aarav@nexabyte.com",
  },
  {
    name: "Neha Verma", role: "Lead Developer", exp: "7+ yrs", img: "girl.jpg",
    bio: "Builds fast, secure web applications and guides the engineering team on best practices.",
    skills: ["React", "Node.js", "MongoDB"],
    linkedin: "https://www.linkedin.com", github: "https://github.com", email: "neha@nexabyte.com",
  },
  {
    name: "Karan Joshi", role: "Cloud Engineer", exp: "6+ yrs", img: "boy.jpg",
    bio: "Designs reliable cloud infrastructure and automates deployments with zero downtime.",
    skills: ["AWS", "Docker", "CI/CD"],
    linkedin: "https://www.linkedin.com", github: "https://github.com", email: "karan@nexabyte.com",
  },
  {
    name: "Isha Desai", role: "UI/UX Designer", exp: "5+ yrs", img: "girl.jpg",
    bio: "Creates clean, user-friendly interfaces that look great and are easy to use.",
    skills: ["Figma", "Prototyping", "Branding"],
    linkedin: "https://www.linkedin.com", email: "isha@nexabyte.com",
  },
];

function Photo({ name, img }) {
  const [failed, setFailed] = useState(false);

  if (!img || failed) return <div className="tm-initial">{name[0]}</div>;

  return (
    <img
      className="tm-photo"
      src={`${process.env.PUBLIC_URL}/images/team/${img}`}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function Team() {
  return (
    <section className="tm-section" id="team">
      <h2>Meet Our <span>Team</span></h2>
      <p className="tm-sub">Experienced people who care about your success.</p>

      <div className="tm-grid">
        {team.map((m) => (
          <div className="tm-card" key={m.name}>
            <div className="tm-media">
              <Photo name={m.name} img={m.img} />
              <span className="tm-exp">{m.exp}</span>

              <div className="tm-social">
                {m.linkedin && <a href={m.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
                {m.github && <a href={m.github} target="_blank" rel="noreferrer">GitHub</a>}
                {m.email && <a href={`mailto:${m.email}`}>Email</a>}
              </div>
            </div>

            <div className="tm-info">
              <h3>{m.name}</h3>
              <span className="tm-role">{m.role}</span>
              <p className="tm-bio">{m.bio}</p>
              <div className="tm-skills">
                {m.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}