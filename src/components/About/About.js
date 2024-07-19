import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.css";

const About = () => {
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
  };

  const itemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      className={styles.About}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div className={styles.content} variants={itemVariants}>
        <motion.h2
          className={styles.title}
          variants={itemVariants}
          transition={{ duration: 0.5 }}
        >
          About Me{" "}
        </motion.h2>{" "}
        <motion.p
          className={styles.description}
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          As an undergraduate deeply passionate about technology and software
          development, I am driven by the principles of Leoism, advocating
          creativity and leadership.I constantly seek out new technologies,
          embracing the challenge of crafting innovative solutions that tackle
          real - world problems.In my free time, I explore diverse facets of web
          development, experiment with cutting - edge frameworks, and
          enthusiastically participate in hackathons to continually expand my
          knowledge and push the boundaries of what 's possible.{" "}
        </motion.p>{" "}
      </motion.div>{" "}
    </motion.div>
  );
};

export default About;
