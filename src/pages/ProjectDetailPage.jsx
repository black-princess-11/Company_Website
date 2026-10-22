import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import { projects } from "../components/Portfolio";
import "../style_css/project-detail.css";

function ProjectDetailImage({ image, title }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="project-detail-image-fallback">
        <span>{title}</span>
      </div>
    );
  }

  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/work/${image}`}
      alt={title}
      onError={() => setFailed(true)}
    />
  );
}

export default function ProjectDetailPage() {
  const { projectSlug } = useParams();
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <PageBanner
        title={project.title}
        text={project.category}
        image="banner.jpg"
      />

      <main className="project-detail-page">
        <div className="project-detail-container">
          <Reveal>
            <div className="project-detail-hero">
              <ProjectDetailImage
                image={project.image}
                title={project.title}
              />
            </div>
          </Reveal>

          <Reveal>
            <section className="project-detail-content">
              <span className="project-detail-category">
                {project.category}
              </span>

              <h1>{project.title}</h1>

              <p className="project-detail-description">
                {project.description}
              </p>

              <h2>Technologies Used</h2>

              <div className="project-detail-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-detail-actions">
                <Link to="/contact" className="project-detail-button">
                  Discuss Your Project <span aria-hidden="true">→</span>
                </Link>

                <Link to="/projects" className="project-detail-back">
                  ← Back to All Projects
                </Link>
              </div>
            </section>
          </Reveal>
        </div>
      </main>
    </>
  );
}