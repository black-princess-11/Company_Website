import "../style_css/hero.css";
import { Link } from "react-router-dom";
import Counter from "./Counter";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <h1 >
        We Build <span>Smart Digital</span> Solutions
      </h1>
      <p>Web, mobile, cloud and AI services to grow your business.</p>

      <div className="buttons">
        <Link to="/contact" className="btn primary">
          Get Started
        </Link>
        <Link to="/services" className="btn outline">
          Our Services
        </Link>
      </div>

      <section className="counter-section">
        <div className="counter-grid">
          <Counter number={150} label="Projects Completed" />

          <Counter number={80} label="Happy Clients" />

          <Counter number={8} label="Years Experience" />

          <Counter number={25} label="Technologies" />
        </div>
      </section>
    </section>
  );
}
