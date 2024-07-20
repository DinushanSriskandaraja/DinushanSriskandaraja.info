import React from "react";
import ProjectsCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css"; // Import your CSS module
import sms from "../../assets/Projects/SMS.jpg";

const projectsData = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae...",
    imageUrl: sms,
    githubUrl: "https://github.com/user/project1",
    demoUrl: "https://demo.project1.com",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Project 2",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames...",
    imageUrl: "https://example.com/project2.jpg",
    githubUrl: "https://github.com/user/project2",
  },
  // Add more projects as needed
];

const Projects = () => (
  <div className={styles.Projects}>
    <h2 className={styles.projectsTitle}> Projects </h2>{" "}
    <div className={styles.projectCards}>
      {" "}
      {projectsData.map((project, index) => (
        <ProjectsCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          githubUrl={project.githubUrl}
          demoUrl={project.demoUrl}
          techStack={project.techStack}
        />
      ))}{" "}
    </div>{" "}
  </div>
);

export default Projects;
