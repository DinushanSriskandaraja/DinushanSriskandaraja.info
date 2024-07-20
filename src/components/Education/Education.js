import React, { useEffect } from "react";
import EduExCard from "../EduExCard/EduExCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";
import styles from "./Education.module.css";

const educationData = [
  {
    institution: "SLIIT City University",
    degree: "Higher Diploma in Information Technology",
    duration: "2022 - Present",
    description:
      "Pursuing a Higher Diploma with a focus on Data Communication and Networks, Software Development, and Web Technologies. Gaining hands-on experience in cutting-edge IT practices and tools.",
  },
  // {
  //   institution: "Hindu College Colombo",
  //   degree: "G.C.E Advanced Level",
  //   duration: "2020 - 2022",
  //   description:
  //     "Completed advanced studies in Science and Mathematics, complemented by additional coursework in Computer Science, laying a strong foundation for further IT education.",
  // },
  {
    institution: "Esoft Metro Campus",
    degree: "Diploma in IT",
    duration: "2019",
    description:
      "Studied core IT concepts, including programming, database management, and networking, with practical exposure to various IT applications and technologies.",
  },
  {
    institution: "Esoft Metro Campus",
    degree: "Diploma in English",
    duration: "2019",
    description:
      "Enhanced communication skills through advanced English language studies, focusing on professional and technical writing, and effective verbal communication.",
  },
];

const Education = () => {
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
      className={styles.Education}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <h2 className={styles.title}> Education </h2>{" "}
      <div className={styles.timeline}>
        {" "}
        {educationData.map((education, index) => (
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
              title={education.institution}
              subtitle={education.degree}
              duration={education.duration}
              description={education.description}
            />{" "}
          </motion.div>
        ))}{" "}
        {/* End of Timeline Indicator */}{" "}
        <div className={styles.timelineEnd}>
          {" "}
          <FontAwesomeIcon icon={faHourglassEnd} size="2x" />{" "}
        </div>{" "}
      </div>{" "}
    </motion.div>
  );
};

export default Education;
