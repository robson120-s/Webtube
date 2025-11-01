import React from "react";
import logo from "../images/logo_black.png";
import "../components/styles/header.css";

const Header = () => {
  return (
    <header
      className="header-container"
      style={{
        width: "100%",
        textAlign: "center",
        padding: "20px 10px",
        background: "linear-gradient(180deg, #ffffff, #f8f8f8)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="header"></div>

      <div
        className="text-center rounded w-100 pt-3"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {/* ✅ Responsive Logo Container */}
        <div
          style={{
            width: "min(35vw, 150px)", // responsive width (max 150px)
            height: "min(35vw, 150px)", // responsive height (max 150px)
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(0,0,0,0.1)";
          }}
        >
          <img
            src={logo}
            alt="Hamere Birhan Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // ensures no cropping
              borderRadius: "50%",
            }}
          />
        </div>

        {/* ✅ Title */}
        <h1
          className="display-4 fw-bold text-dark text"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3.9rem)",
            fontWeight: "700",
            color: "#222",
            marginTop: "15px",
            lineHeight: "1.2",
          }}
        >
          Hamere Birhan
        </h1>

        {/* ✅ Subtitle */}
        <p
          style={{
            color: "#555",
            fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
            marginTop: "-5px",
            maxWidth: "90%",
          }}
        >
          ሐመረ ብርሃን የብራና መጻሕፍት ሥራ ድርጅት
        </p>
      </div>
    </header>
  );
};

export default Header;
