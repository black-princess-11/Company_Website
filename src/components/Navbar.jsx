
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style_css/navbar.css";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Our Team", "/team"],
  ["Careers", "/careers"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={closeMenu} className="navbar-brand">
        <h2 className="logo">
          Nexa<span>Byte</span>
        </h2>
      </Link>

      <ul className={open ? "open" : ""}>
        {links.map(([name, to]) => (
          <li key={name}>
            <NavLink
              to={to}
              end={to === "/"}
              onClick={closeMenu}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <span className="phone">+91 98765 43210</span>

        <Link
          to="/contact"
          className="nav-btn"
          onClick={closeMenu}
        >
          Get a Quote
        </Link>

        <button
          type="button"
          className="burger"
          onClick={() => setOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
