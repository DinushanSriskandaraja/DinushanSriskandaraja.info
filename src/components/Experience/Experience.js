import React, { useEffect } from "react";
import EduExCard from "../EduExCard/EduExCard";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import styles from "./Experience.module.css";

const experienceData = [
  {
    title: "Branding Consultant",
    subtitle: "Self-Employed",
    duration: "April 2024 - Present",
    description:
      "Empowering startups and businesses to elevate their digital presence. Specializing in brand strategy, visual identity, and online engagement.",
  },
  {
    title: "Front-End Developer",
    subtitle: "Aizenit",
    duration: "August 2022 - April 2023",
    description:
      "Revamped user interfaces for web applications using Angular, enhancing usability and aesthetics. Addressed and resolved privilege-based issues to ensure smooth functionality.",
  },
  {
    title: "Quality Assurance",
    subtitle: "Aizenit",
    duration: "June 2022 - August 2022",
    description:
      "Conducted thorough testing for Android and web applications to ensure quality and performance. Developed and maintained comprehensive test cases to identify and resolve bugs.",
  },
];

const Experience = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      className={styles.Experience}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <h2 className={styles.title}> Experience </h2>{" "}
      <div className={styles.timeline}>
        <div className={styles.timelineStart}>
          <FontAwesomeIcon icon={faHourglassStart} size="2x" />
        </div>{" "}
        {experienceData.map((experience, index) => (
          <motion.div
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            key={index}
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            <EduExCard
              title={experience.title}
              subtitle={experience.subtitle}
              duration={experience.duration}
              description={experience.description}
            />{" "}
          </motion.div>
        ))}{" "}
      </div>{" "}
    </motion.div>
  );
};

export default Experience;
