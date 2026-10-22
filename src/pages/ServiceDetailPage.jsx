
import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";

import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";

import "../style_css/service-detail.css";

const services = {
  "website-development": {
    title: "Website Development",
    eyebrow: "WEB SOLUTIONS",
    image: "web.png",
    subtitle:
      "Modern, responsive and high-performance websites for your business.",
    description:
      "We build professional websites and custom web applications tailored to your business goals, brand identity and customer needs. Every experience is designed to work smoothly across desktop, tablet and mobile devices.",
    features: [
      {
        title: "Business Websites",
        image: "web.png",
        description:
          "Professional online experiences that communicate your brand and services clearly.",
      },
      {
        title: "Custom Web Applications",
        image: "web.png",
        description:
          "Purpose-built web applications designed around your workflows and requirements.",
      },
      {
        title: "Responsive Design",
        image: "webdevelopment.jpg",
        description:
          "Layouts that adapt to mobile phones, tablets and desktop screens.",
      },
      {
        title: "E-commerce Development",
        image: "web.png",
        description:
          "Online shopping experiences with intuitive product discovery and user journeys.",
      },
      {
        title: "Performance Optimization",
        image: "webdevelopment.jpg",
        description:
          "Improve loading performance, usability and overall website quality.",
      },
      {
        title: "Maintenance & Support",
        image: "cloud.png",
        description:
          "Ongoing improvements to help keep your website reliable and up to date.",
      },
    ],
    technologies: ["React", "JavaScript", "HTML & CSS", "Node.js"],
  },

  "mobile-app": {
    title: "Mobile App Development",
    eyebrow: "MOBILE SOLUTIONS",
    image: "smartphone.png",
    subtitle: "Powerful mobile experiences designed for Android and iOS.",
    description:
      "We create intuitive mobile applications that help businesses connect with customers, improve accessibility and deliver useful digital experiences.",
    features: [
      {
        title: "Android Applications",
        image: "smartphone.png",
        description:
          "Mobile applications designed for Android users and devices.",
      },
      {
        title: "iOS Applications",
        image: "smartphone.png",
        description:
          "Polished mobile experiences tailored to Apple's mobile platform.",
      },
      {
        title: "Cross-platform Apps",
        image: "smartphone.png",
        description:
          "Solutions designed to support multiple mobile platforms efficiently.",
      },
      {
        title: "API Integration",
        image: "ui.png",
        description:
          "Connect applications with services and data through appropriate APIs.",
      },
      {
        title: "Mobile UI/UX",
        image: "ui.png",
        description:
          "Intuitive navigation and mobile-friendly user interface design.",
      },
      {
        title: "Testing & Maintenance",
        image: "protect.png",
        description:
          "Testing and ongoing improvements to support a consistent user experience.",
      },
    ],
    technologies: ["Flutter", "Kotlin", "Swift", "React Native"],
  },

  "cloud-computing": {
    title: "Cloud Computing",
    eyebrow: "CLOUD SOLUTIONS",
    image: "cloud.png",
    subtitle:
      "Scalable infrastructure and cloud solutions for growing businesses.",
    description:
      "We help businesses plan and manage cloud environments that support application deployment, infrastructure flexibility and changing operational needs.",
    features: [
      {
        title: "Cloud Migration",
        image: "cloud.png",
        description:
          "Plan the movement of applications and data to suitable cloud environments.",
      },
      {
        title: "Cloud Infrastructure",
        image: "cloud.png",
        description:
          "Structure cloud resources according to application requirements.",
      },
      {
        title: "Application Deployment",
        image: "cloud.png",
        description:
          "Prepare deployment workflows for reliable application releases.",
      },
      {
        title: "Scalability Planning",
        image: "cloud.png",
        description:
          "Design infrastructure with future workloads and growth in mind.",
      },
      {
        title: "Deployment Automation",
        image: "webdevelopment.jpg",
        description:
          "Reduce repetitive deployment tasks through suitable automation.",
      },
      {
        title: "Monitoring & Maintenance",
        image: "cloud.png",
        description:
          "Support infrastructure visibility and ongoing operational improvements.",
      },
    ],
    technologies: ["AWS", "Microsoft Azure", "Docker", "Cloud Platforms"],
  },

  "ui-ux-design": {
    title: "UI/UX Design",
    eyebrow: "DIGITAL EXPERIENCE",
    image: "ux.png",
    subtitle: "Clear, intuitive and engaging digital experiences for your users.",
    description:
      "We design user-focused interfaces that make digital products easier to understand and use, with consistent layouts, accessible interactions and clear navigation.",
    features: [
      {
        title: "User Interface Design",
        image: "ux.png",
        description:
          "Consistent visual interfaces aligned with your brand identity.",
      },
      {
        title: "User Experience Research",
        image: "ui.png",
        description:
          "Understand user needs and identify opportunities to improve usability.",
      },
      {
        title: "Wireframes & Prototypes",
        image: "ui.png",
        description:
          "Explore page structure and interactions before development.",
      },
      {
        title: "Website Redesign",
        image: "web.png",
        description:
          "Refresh existing websites with improved structure and usability.",
      },
      {
        title: "Mobile App Design",
        image: "smartphone.png",
        description:
          "Design mobile journeys with clear navigation and interaction patterns.",
      },
      {
        title: "Design Systems",
        image: "ui.png",
        description:
          "Create reusable design patterns for consistent digital products.",
      },
    ],
    technologies: ["Figma", "Wireframes", "Prototyping", "Design Systems"],
  },

  "ai-data-analytics": {
    title: "AI and Data Analytics",
    eyebrow: "INTELLIGENT SOLUTIONS",
    image: "AI.jpg",
    subtitle:
      "Turn business data into meaningful insights and smarter workflows.",
    description:
      "We help businesses explore AI-powered features and data analytics to understand patterns, streamline processes and support informed decisions.",
    features: [
      {
        title: "Data Analysis",
        image: "AI.jpg",
        description:
          "Organize and examine data to identify useful patterns and trends.",
      },
      {
        title: "Business Dashboards",
        image: "ux.png",
        description:
          "Present key business information through understandable visual summaries.",
      },
      {
        title: "AI-powered Features",
        image: "AI.jpg",
        description:
          "Explore practical AI capabilities based on business requirements.",
      },
      {
        title: "Workflow Automation",
        image: "AI.jpg",
        description:
          "Identify repetitive tasks that may benefit from automation.",
      },
      {
        title: "Predictive Analytics",
        image: "AI.jpg",
        description:
          "Explore analytical approaches to understand potential future trends.",
      },
      {
        title: "Data Visualization",
        image: "AI.jpg",
        description:
          "Communicate complex information through clear charts and reports.",
      },
    ],
    technologies: ["Python", "Machine Learning", "Analytics", "Visualization"],
  },

  "cyber-security": {
    title: "Cyber Security",
    eyebrow: "SECURITY SOLUTIONS",
    image: "protect.png",
    subtitle: "Security-conscious digital solutions for modern businesses.",
    description:
      "We help organizations identify common application risks and adopt practical security practices to better protect digital assets and business information.",
    features: [
      {
        title: "Security Assessments",
        image: "protect.png",
        description:
          "Review application security practices and identify potential areas of concern.",
      },
      {
        title: "Secure Coding",
        image: "protect.png",
        description:
          "Apply security-conscious development practices throughout implementation.",
      },
      {
        title: "Application Security",
        image: "protect.png",
        description:
          "Review application design and common security weaknesses.",
      },
      {
        title: "Access Control",
        image: "protect.png",
        description:
          "Plan appropriate access permissions for users and application resources.",
      },
      {
        title: "Risk Assessment",
        image: "protect.png",
        description:
          "Identify and prioritize potential security risks for further review.",
      },
      {
        title: "Security Improvements",
        image: "protect.png",
        description:
          "Provide practical recommendations to strengthen application security.",
      },
    ],
    technologies: ["Secure Coding", "Access Control", "Risk Assessment"],
  },
};

/* Reusable image component */
function ServiceImage({ image, title, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div
        className={`${className} service-detail-image-fallback`}
        aria-label={`${title} image unavailable`}
      >
        {title.charAt(0)}
      </div>
    );
  }

  return (
    <img
      className={className}
      src={`${process.env.PUBLIC_URL}/images/domain/${image}`}
      alt={title}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = services[serviceSlug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="service-detail-page">
      <PageBanner
        title={service.title}
        text={service.subtitle}
        image="banner.jpg"
      />

      <section className="service-detail-section">
        <div className="service-detail-container">
          <Reveal>
            <div className="service-detail-intro">
              <span className="service-detail-label">
                {service.eyebrow}
              </span>

              <div className="service-detail-hero-image">
                <ServiceImage
                  image={service.image}
                  title={service.title}
                  className="service-detail-main-image"
                />
              </div>

              <h2>
                Discover Our <strong>{service.title}</strong> Solutions
              </h2>

              <p className="service-detail-description">
                {service.description}
              </p>
            </div>
          </Reveal>

          <div className="service-detail-features">
            {service.features.map((feature) => (
              <Reveal key={feature.title}>
                <article className="service-detail-card">
                  <div className="service-detail-feature-image">
                    <ServiceImage
                      image={feature.image}
                      title={feature.title}
                      className="service-detail-feature-img"
                    />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <section className="service-detail-tech">
              <span className="service-detail-label">
                OUR TOOLKIT
              </span>

              <h2>Technologies & Tools</h2>

              <div className="service-detail-technologies">
                {service.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="service-detail-cta">
              <div>
                <span className="service-detail-label">
                  LET'S WORK TOGETHER
                </span>

                <h2>Ready to discuss your project?</h2>

                <p>
                  Tell us about your requirements and let's explore
                  the right solution for your business.
                </p>
              </div>

              <Link to="/contact" className="service-detail-button">
                Discuss Your Project <span aria-hidden="true">→</span>
              </Link>
            </section>
          </Reveal>

          <Link to="/services" className="service-detail-back">
            ← Back to All Services
          </Link>
        </div>
      </section>
    </main>
  );
}
