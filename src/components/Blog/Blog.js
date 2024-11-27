import React, { useState } from "react";
import { motion } from "framer-motion";
import MakrDownReader from "../MakrDownReader/MakrDownReader";
import styles from "./Blog.module.css";

const blogPosts = [
  {
    title: "Discover",
    img: "path/to/discover.jpg",
    fileName: "MentalHealth.md",
  },
  { title: "Learn", img: "path/to/learn.jpg", fileName: "1.md" },
  { title: "Grow", img: "path/to/grow.jpg", fileName: "grow.md" },
  {
    title: "Discover Again",
    img: "path/to/discover.jpg",
    fileName: "discover-again.md",
  },
];

const Blog = () => {
  const [selectedContent, setSelectedContent] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(null); // Track the active card

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
                    →
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
