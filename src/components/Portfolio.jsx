import { useState } from "react";
import { Link } from "react-router-dom";
import "../style_css/portfolio.css";

export const projects = [
  {
    slug: "business-website",
    title: "Business Website",
    category: "Web Development",
    image: "webdevelopment.jpg",
    description:
      "A modern, responsive business website designed to build an online presence, showcase services and help businesses connect with customers.",
    technologies: ["React", "JavaScript", "CSS"],
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Web Application",
    image: "ecommerce.jpg",
    description:
      "A modern e-commerce platform with a clean shopping experience, product presentation and responsive design.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    slug: "mobile-application",
    title: "Mobile Application",
    category: "Mobile App",
    image: "mobileapp.jpg",
    description:
      "A user-friendly mobile application designed for smooth navigation, intuitive interfaces and a better mobile experience.",
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    slug: "cloud-dashboard",
    title: "Cloud Dashboard",
    category: "Cloud Solutions",
    image: "clouddashboard.jpg",
    description:
      "A cloud-based dashboard that presents important business information through a clean and easy-to-understand interface.",
    technologies: ["AWS", "Docker", "React"],
  },
];

function ProjectImage({ image, title, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`portfolio-image-fallback ${className}`}>
        <span>{title}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={`${process.env.PUBLIC_URL}/images/work/${image}`}
      alt={title}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-heading">
        <h2>
          Recent <strong>Projects</strong>
        </h2>
        <p>
          Explore some of the digital solutions we have built for our clients.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article className="portfolio-card" key={project.slug}>
            <Link
              to={`/projects/${project.slug}`}
              className="portfolio-image"
              aria-label={`View ${project.title}`}
            >
              <ProjectImage image={project.image} title={project.title} />
            </Link>

            <div className="portfolio-info">
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <Link
                to={`/projects/${project.slug}`}
                className="portfolio-view-link"
              >
                View Project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}