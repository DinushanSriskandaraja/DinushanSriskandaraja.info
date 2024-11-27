import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MakrDownReader from "../MakrDownReader/MakrDownReader";
import styles from "./Blog.module.css";
import l1 from "../../assets/banner/l1.jpg";
import l2 from "../../assets/banner/l2.jpg";
import l3 from "../../assets/banner/l3.jpg";
import l4 from "../../assets/banner/l4.jpg";
import l5 from "../../assets/banner/l5.jpg";
import l6 from "../../assets/banner/l6.jpg";
import l7 from "../../assets/banner/l7.png";
import l8 from "../../assets/banner/l8.jpg";
import l9 from "../../assets/banner/l9.png";

const blogPosts = [
  {
    title: "Professional Skills",
    img: l1,
    fileName: "Lesson1.md",
  },
  {
    title: "Cv and Cover letter Writing",
    img: l2,
    fileName: "Lesson2.md",
  },
  {
    title: "Portfolio",
    img: l3,
    fileName: "Lesson3.md",
  },
  {
    title: "Interview Skills",
    img: l4,
    fileName: "Lesson4.md",
  },
  {
    title: "Online/Email Etiquette",
    img: l5,
    fileName: "Lesson5.md",
  },
  {
    title: "Telephone Etiquette",
    img: l6,
    fileName: "Lesson6.md",
  },
  {
    title: "Negotation Skills",
    img: l7,
    fileName: "Lesson7.md",
  },
  {
    title: "Meeting Skills",
    img: l8,
    fileName: "Lesson8.md",
  },
  {
    title: "Emotional Intelligence",
    img: l9,
    fileName: "Lesson9.md",
  },
];

const Blog = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(null); // Track the active card
  useEffect(() => {
    // Load the first blog post as default
    loadMarkdown(blogPosts[0].fileName, 0);
  }, []);
  const loadMarkdown = (fileName, index) => {
    import(`../../assets/.md/${fileName}`)
      .then((module) => fetch(module.default).then((res) => res.text()))
      .then((content) => {
        setSelectedContent(content);
        setActiveCardIndex(index); // Set the active card when clicked
      })
      .catch((err) => console.error("Error loading markdown:", err));
  };

  return (
    <div className={styles.Blog}>
      <div className={styles.container}>
        {" "}
        {/* Blog Cards Section */}{" "}
        <div className={styles.cardsSection}>
          <div className={styles.cardsContainer}>
            {" "}
            {blogPosts.map((post, index) => (
              <motion.div
                className={`${styles.card} ${
                  activeCardIndex === index ? styles.activeCard : ""
                }`} // Add the activeCard class for the active card
                key={index}
                onClick={() => loadMarkdown(post.fileName, index)} // Load content and set active card
                transition={{ duration: 0.3 }}>
                <div className={styles.thumbnailContainer}>
                  <motion.img
                    src={post.img}
                    alt={post.title}
                    className={styles.cardImage}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />{" "}
                </div>{" "}
                <div className={styles.cardOverlay}>
                  <h2> {post.title} </h2>{" "}
                  <motion.span
                    className={styles.arrow}
                    whileHover={{ x: 5 }}
                    transition={{ type: "tween", duration: 0.3 }}>
                    {" "}
                    →{" "}
                  </motion.span>{" "}
                </div>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        {/* Markdown Reader Section */}{" "}
        <div className={styles.readerSection}>
          {" "}
          {selectedContent && (
            <div className={styles.readerContainer}>
              <MakrDownReader markdownContent={selectedContent} />{" "}
            </div>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Blog;
