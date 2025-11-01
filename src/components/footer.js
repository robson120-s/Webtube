import React from "react";
import footerImage from "../images/channels4_banner.jpg"; // ✅ better variable name

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "2rem",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Footer image wrapper */}
      <div
        style={{
          width: "100%",
          borderTop: "5px solid #e7a3a3",
          borderBottom: "5px solid #e7a3a3",
          overflow: "hidden",
        }}
      >
        <img
          src={footerImage}
          alt="Footer Banner"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover", // keeps proportions
            borderRadius: "8px",
            display: "block",
          }}
        />
      </div>

      {/* Optional text below the image */}
      <p
        style={{
          color: "#555",
          marginTop: "10px",
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
        }}
      >
        © {new Date().getFullYear()} Hamere Birhan — All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
