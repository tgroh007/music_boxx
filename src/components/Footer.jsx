import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <NavLink to="/" className="footer-link">Intro</NavLink>
        <NavLink to="/work" className="footer-link">Work</NavLink>
        <NavLink to="/about" className="footer-link">About</NavLink>
        <NavLink to="/contact" className="footer-link">Contact</NavLink>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        © 2026 Blackwire LLC
      </div>
    </footer>
  );
}
