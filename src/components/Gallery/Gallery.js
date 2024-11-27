import React, { useRef } from "react";
import ImageCard from "../ImageCard/ImageCard"; // Adjust the import path as needed
import styles from "./Gallery.module.css"; // Import the CSS module
import { motion } from "framer-motion";

// Function to generate a random number between min and max
const getRandomValue = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Dynamically import images
const requireContext = require.context(
  "../../assets/gallery",
  false,
  /\.(jpg|jpeg|png)$/
);
const imageFiles = requireContext.keys().map((file) => requireContext(file));

const images = imageFiles.map((file, index) => ({
  src: file, // Use file.default to get the image path
  alt: `Example image ${index + 1}`,
  // rotate: `${getRandomRotation()}deg`, // Example rotation
  rotate: `${getRandomValue(-20, 20)}deg`,
  top: `${getRandomValue(0, 80)}%`, // Random top position between 0% and 80%
  left: `${getRandomValue(0, 80)}%`, // Random left position between 0% and 80%
  width: "auto", // Adjust as needed
  height: "200px",
}));

const Gallery = () => {
  const containerRef = useRef(null);

  return (
    <section className={styles.galleryContainer}>
      <motion.h2
        className={styles.galleryTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        GALLERY <span className={styles.highlight}> . </span>{" "}
      </motion.h2>{" "}
      <div className={styles.imageContainer} ref={containerRef}>
        {" "}
        {images.map((image, index) => (
          <ImageCard
            key={index}
            containerRef={containerRef}
            src={image.src}
            alt={image.alt}
            rotate={image.rotate}
            top={image.top}
            left={image.left}
            width={image.width}
            height={image.height}
            className={styles.imageCard}
          />
        ))}{" "}
      </div>{" "}
    </section>
  );
};

export default Gallery;
