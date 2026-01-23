import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Create this new CSS file

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="nav-link">Intro</NavLink>
      <NavLink to="/work" className="nav-link">Work</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </header>
  );
}
