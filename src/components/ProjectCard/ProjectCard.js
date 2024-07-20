import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import styles from "./ProjectCard.module.css";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const ProjectsCard = ({
  title,
  description,
  imageUrl,
  githubUrl,
  demoUrl,
  techStack,
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={styles.ProjectsCard}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={styles.projectInner}
        style={{
          transformStyle: "preserve-3d",
          transform,
        }}
      >
        <img src={imageUrl} alt={title} className={styles.projectImage} />{" "}
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}> {title} </h3>{" "}
          <p className={styles.projectDescription}> {description} </p>{" "}
          {techStack && techStack.length > 0 && (
            <div className={styles.techStack}>
              {" "}
              {techStack.map((tech, index) => (
                <span key={index} className={styles.techStackItem}>
                  {" "}
                  {tech}{" "}
                </span>
              ))}{" "}
            </div>
          )}{" "}
          <div className={styles.projectLinks}>
            {" "}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                GitHub{" "}
              </a>
            )}{" "}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Demo{" "}
              </a>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </motion.div>{" "}
    </motion.div>
  );
};

ProjectsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string), // Added PropTypes for techStack
};

ProjectsCard.defaultProps = {
  githubUrl: "",
  demoUrl: "",
  techStack: [], // Default value for techStack
};

export default ProjectsCard;
