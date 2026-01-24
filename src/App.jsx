import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Intro from "./pages/Intro";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      {/* Top navigation */}
      <Navbar />

      {/* Main content area (pushed below fixed navbar) */}
      <div style={{ paddingTop: "80px", paddingLeft: "40px", paddingRight: "40px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating scroll-to-top button (right side) */}
      <ScrollToTop />
    </Router>
  );
}
