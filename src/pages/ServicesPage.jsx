
import { useState } from "react";
import { Link } from "react-router-dom";

import Services from "../components/Services";
import Domains from "../components/Domains";
import Ecosystem from "../components/Ecosystem";
import Reveal from "../components/Reveal";
import PageBanner from "../components/PageBanner";

import "../style_css/services.css";

const serviceCards = [
  {
    title: "Website Development",
    slug: "website-development",
    image: "web.png",
    description:
      "Responsive websites and custom web applications designed around your business goals.",
    tags: ["Business Websites", "Web Applications", "Responsive Design"],
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app",
    image: "smartphone.png",
    description:
      "Intuitive mobile applications that connect your business with customers on the go.",
    tags: ["Android", "iOS", "Cross-platform"],
  },
  {
    title: "Cloud Computing",
    slug: "cloud-computing",
    image: "cloud.png",
    description:
      "Scalable infrastructure, cloud migration and reliable application deployment.",
    tags: ["Cloud Migration", "Deployment", "Scalability"],
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    image: "ui.png",
    description:
      "User-focused digital experiences with clear navigation and consistent interfaces.",
    tags: ["Wireframes", "Prototypes", "Design Systems"],
  },
  {
    title: "AI and Data Analytics",
    slug: "ai-data-analytics",
    image: "AI.jpg",
    description:
      "Practical AI and data-driven solutions that simplify workflows and reveal insights.",
    tags: ["Artificial Intelligence", "Analytics", "Automation"],
  },
  {
    title: "Cyber Security",
    slug: "cyber-security",
    image: "protect.png",
    description:
      "Security-conscious development and assessments to help protect digital assets.",
    tags: ["Security Reviews", "Secure Coding", "Risk Assessment"],
  },
];

/* Service image component */
function ServiceImage({ title, image }) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div className="service-showcase-image-fallback" aria-hidden="true">
        {title.charAt(0)}
      </div>
    );
  }

  return (
    <img
      className="service-showcase-image"
      src={`${process.env.PUBLIC_URL}/images/domain/${image}`}
      alt={title}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        text="Technology solutions designed to help your business grow."
        image="banner.jpg"
      />

      <main className="services-page">
        <Reveal>
          <Services />
        </Reveal>

        <section className="services-showcase">
          <Reveal>
            <div className="services-showcase-heading">
              <span className="services-eyebrow">
                OUR EXPERTISE
              </span>

              <h2>
                Solutions Built for Your{" "}
                <strong>Business</strong>
              </h2>

              <p>
                Explore our services and discover the right technology
                solution for your next project.
              </p>
            </div>
          </Reveal>

          <div className="services-showcase-grid">
            {serviceCards.map((service, index) => (
              <Reveal key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="service-showcase-card"
                  style={{ "--service-index": index }}
                >
                  <div className="service-showcase-top">
                    <ServiceImage
                      title={service.title}
                      image={service.image}
                    />

                    <span
                      className="service-showcase-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="service-showcase-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <span className="service-showcase-link">
                    Explore Service
                    <span aria-hidden="true"> →</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <Domains />
        </Reveal>

        <Reveal>
          <Ecosystem />
        </Reveal>
      </main>
    </>
  );
}
