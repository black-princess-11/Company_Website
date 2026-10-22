import { Link } from "react-router-dom";
import "../style_css/footer.css";

export default function Footer() {
  return (
    <footer className="ft-footer">
      <div className="ft-grid">
        <div>
          <h2 className="ft-logo">Nexa<span>Byte</span></h2>
          <p>Smart digital solutions for growing businesses.</p>
        </div>

        <div>
          <h4>IT Services</h4>
          <Link to="/services">Web Development</Link>
          <Link to="/services">Mobile Apps</Link>
          <Link to="/about">Cloud and DevOps</Link>
          <Link to="/services">UI/UX Design</Link>
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div>
          <h4>Contact Details</h4>
          <p>📍 123 Tech Park, Sample City, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@nexabyte.com</p>
        </div>
      </div>

      <div className="ft-bottom">
        © {new Date().getFullYear()} NexaByte Technologies. All rights reserved.
      </div>
    </footer>
  );
}