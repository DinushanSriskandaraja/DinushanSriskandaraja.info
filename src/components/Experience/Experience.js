import React, { useEffect } from "react";
import EduExCard from "../EduExCard/EduExCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Experience.module.css";

const experienceData = [
  {
    title: "Software Developer Intern",
    subtitle: "Tech Innovators Inc.",
    duration: "June 2023 - August 2023",
    description:
      "Developed and maintained web applications using React and Node.js. Collaborated with the team on various projects and improved application performance.",
  },
  {
    title: "Freelance Web Developer",
    subtitle: "Self-Employed",
    duration: "January 2023 - Present",
    description:
      "Designed and developed websites for various clients, focusing on responsive design and user experience. Managed projects from conception to deployment.",
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
        {" "}
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
            {/* <div className={styles.timelineDot}> </div>{" "} */}{" "}
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
