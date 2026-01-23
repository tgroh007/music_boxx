import { NavLink } from "react-router-dom";
import "./Footer.css"; // we’ll create this next

export default function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/" className="footer-link">Intro</NavLink>
      <NavLink to="/work" className="footer-link">Work</NavLink>
      <NavLink to="/about" className="footer-link">About</NavLink>
      <NavLink to="/contact" className="footer-link">Contact</NavLink>
    </footer>
  );
}
