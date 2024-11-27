import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experiences from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Blog from "./components/Blog/Blog";
import { Element } from "react-scroll";
import "./styles/App.css";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Element name="home">
          <Home />
        </Element>{" "}
        <Element name="about">
          <About />
        </Element>{" "}
        <Element name="projects">
          <Projects />
        </Element>{" "}
        <Element name="experiences">
          <Experiences />
        </Element>{" "}
        <Element name="education">
          <Education />
        </Element>{" "}
        <Element name="gallery">
          <Gallery />
        </Element>{" "}
        <Element name="blog">
          <Blog />
        </Element>{" "}
      </main>{" "}
    </div>
  );
};

export default App;
