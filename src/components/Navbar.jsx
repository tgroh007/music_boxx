import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo now links to home */}
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          The Music Boxx
        </NavLink>

        {/* Hamburger button for mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Links */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>Intro</NavLink>
          <NavLink to="/work" className="nav-link" onClick={() => setOpen(false)}>Work</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
