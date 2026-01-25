import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`scroll-button ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <svg width="50" height="50" viewBox="0 0 120 120">
        {/* Outer ellipse / haze */}
        <ellipse
          cx="60"
          cy="60"
          rx="55"
          ry="55"
          fill="none"
          stroke="#1976d2"
          strokeWidth="2"
          opacity="0.1"
          className="outer-ellipse"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 60 60"
            to="360 60 60"
            dur="20s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Mini Blue circle */}
        <circle cx="60" cy="60" r="50" fill="#1976d2" opacity="0.15" />

        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit lines */}
        <ellipse
          cx="60"
          cy="60"
          rx="38"
          ry="18"
          fill="none"
          stroke="#1976d2"
          strokeWidth="3"
          filter="url(#glow)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 60 60"
            to="360 60 60"
            dur="10s"
            repeatCount="indefinite"
          />
        </ellipse>

        <ellipse
          cx="60"
          cy="60"
          rx="38"
          ry="18"
          fill="none"
          stroke="#1976d2"
          strokeWidth="3"
          filter="url(#glow)"
          transform="rotate(60 60 60)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 60 60"
            to="360 60 60"
            dur="12s"
            repeatCount="indefinite"
          />
        </ellipse>

        <ellipse
          cx="60"
          cy="60"
          rx="38"
          ry="18"
          fill="none"
          stroke="#1976d2"
          strokeWidth="3"
          filter="url(#glow)"
          transform="rotate(120 60 60)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 60 60"
            to="360 60 60"
            dur="14s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* MB letters */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="18"
          fontWeight="800"
          fill="#111111"
        >
          M
        </text>
        <text
          x="69"
          y="82"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="18"
          fontWeight="800"
          fill="#111111"
        >
          B
        </text>

        {/* Up arrow at bottom with pulse */}
        <polygon points="60,95 70,110 50,110" fill="#1976d2" className="arrow" />
      </svg>
    </button>
  );
}
