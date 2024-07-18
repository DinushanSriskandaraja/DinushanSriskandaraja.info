// Home.js
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          stiffness: 120,
        }}
      >
        Dinushan Sriskandaraja{" "}
      </motion.h1>{" "}
      <motion.p
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          stiffness: 120,
        }}
      >
        <Typewriter
          words={[
            "Intern Software Engineer",
            "Tech Enthusiast",
            "Web Developer",
            "Leo",
          ]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />{" "}
      </motion.p>{" "}
    </motion.div>
  );
};

export default Home;
