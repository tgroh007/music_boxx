import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer"; // ← add footer import

import Intro from "./pages/Intro";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div
        style={{
          paddingTop: "80px",
          paddingLeft: "40px",
          paddingRight: "40px",
          minHeight: "80vh", // ensures footer stays below content
        }}
      >
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer /> {/* ← footer at the bottom */}
    </Router>
  );
}
