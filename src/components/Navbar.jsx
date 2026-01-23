import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#1976d2" : "#333",
  fontWeight: "500",
});

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        height: "60px",
        display: "flex",
        alignItems: "center",
        gap: "30px",
        padding: "0 40px",
        borderBottom: "1px solid #ddd",
        background: "#ffffff",
        zIndex: 1000,
      }}
    >
      <NavLink to="/" style={linkStyle}>Intro</NavLink>
      <NavLink to="/work" style={linkStyle}>Work</NavLink>
      <NavLink to="/about" style={linkStyle}>About</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </header>
  );
}
