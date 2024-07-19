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
        className="head"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          stiffness: 120,
        }}
        style={{ marginBottom: "1rem" }}
      >
        I 'm <br />
        Dinushan <br /> Sriskandaraja{" "}
      </motion.h1>{" "}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
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
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1000}
        />{" "}
      </motion.p>{" "}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          type: "spring",
          stiffness: 120,
        }}
        style={{ marginTop: "2rem" }}
      >
        {/* <motion.a
                                              href="#projects"
                                              whileHover={{ scale: 1.1 }}
                                              whileTap={{ scale: 0.9 }}
                                              style={{
                                                textDecoration: "none",
                                                color: "#bf925a",
                                                fontSize: "1.5rem",
                                                border: "2px solid #bf925a",
                                                padding: "0.5rem 1rem",
                                                borderRadius: "70px",
                                                backgroundColor: "white",
                                              }}
                                            >
                                              View My Work{" "}
                                            </motion.a>{" "} */}{" "}
      </motion.div>{" "}
    </motion.div>
  );
};

export default Home;
