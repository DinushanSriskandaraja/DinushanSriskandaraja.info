import React from "react";
import "../styles/home.css";

function LandingPage() {
  return (
    <div className="home">
      <header className="home-header">
        <div className="header-content">
          <h1 className="brand-text"> Dinushan Sriskandaraja </h1>{" "}
          <p className="keywords"> Software Engineer | Tech Enthusiast </p>{" "}
          <p className="description">
            Experienced software engineer passionate about building robust
            applications and exploring new technologies.{" "}
          </p>{" "}
          <a href="/projects" className="btn btn-primary">
            View Projects{" "}
          </a>{" "}
        </div>{" "}
      </header>{" "}
    </div>
  );
}

export default LandingPage;
