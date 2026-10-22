import { useState } from "react";
import "../style_css/about.css";

const points = [
  "Experienced developers and designers",
  "On-time delivery with clear communication",
  "Secure and scalable solutions",
  "Support after launch",
];

export default function About() {
  const [failed, setFailed] = useState(false);

  return (
    <section className="ab-section" id="about">
      <div className="ab-container">
        {/* Top Content */}
        <div className="ab-main">
          {/* Left Content */}
          <div className="ab-content">
            <h2>
              We turn ideas into <span>powerful software</span>
            </h2>

            <p className="ab-description">
              NexaByte Technologies is a team of engineers and designers who
              build websites, apps and cloud systems for growing businesses.
            </p>

            <div className="ab-points">
              {points.map((point, index) => (
                <div className="ab-point" key={point}>
                  <span className="ab-check">✓</span>

                  <div>
                    <span className="ab-point-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{point}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ab-stats">
              <div className="ab-stat">
                <strong>8+</strong>
                <span>Years Experience</span>
              </div>

              <div className="ab-stat-divider"></div>

              <div className="ab-stat">
                <strong>150+</strong>
                <span>Projects Delivered</span>
              </div>

              <div className="ab-stat-divider"></div>

              <div className="ab-stat">
                <strong>80+</strong>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="ab-visual">
            <div className="ab-image-frame">
              {failed ? (
                <div className="ab-placeholder">
                  <span>About NexaByte</span>
                  <small>Add public/images/about.jpg</small>
                </div>
              ) : (
                <img
                  src={`${process.env.PUBLIC_URL}/images/about/about.jpg`}
                  alt="NexaByte team at work"
                  onError={() => setFailed(true)}
                />
              )}

              <div className="ab-image-overlay"></div>
            </div>

            {/* Experience Badge */}
            <div className="ab-experience">
              <strong>8+</strong>
              <span>
                Years of
                <br />
                Experience
              </span>
            </div>

            {/* Small floating card */}
            <div className="ab-trust-card">
              <span className="ab-trust-icon">✓</span>

              <div>
                <strong>Trusted Technology</strong>
                <span>Built for growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission / Vision */}
        <div className="ab-cards">
          <div className="ab-card ab-card-main">
            <div>
              <span className="ab-card-label">OUR MISSION</span>

              <h3>Building technology that creates real value.</h3>

              <p>
                Deliver simple, reliable technology that helps businesses grow.
              </p>
            </div>
          </div>

          <div className="ab-card">
            <div>
              <span className="ab-card-label">OUR VISION</span>

              <h3>Technology that moves businesses forward.</h3>

              <p>To be a trusted IT partner for companies across the world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
