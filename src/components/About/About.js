// About.js
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div className={styles.About}>
      <div className={styles.content} ref={ref}>
        <motion.h2
          className={styles.title}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          About Me{" "}
        </motion.h2>{" "}
        <motion.p
          className={styles.description}
          initial="hidden"
          animate={controls}
          variants={variants}
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
      </div>{" "}
    </div>
  );
};

export default About;
