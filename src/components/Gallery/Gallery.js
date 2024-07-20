// Gallery.jsx or Gallery.js
import React, { useRef } from "react";
import ImageCard from "../ImageCard/ImageCard"; // Adjust the import path as needed
import styles from "./Gallery.module.css"; // Import the CSS module
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image 1",
    rotate: "6deg",
    top: "20%",
    left: "25%",
    width: "150px",
    height: "auto",
  },
  {
    src: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Example image 2",
    rotate: "12deg",
    top: "45%",
    left: "60%",
    width: "120px",
    height: "auto",
  },
  // Add more images as needed
];

const Gallery = () => {
  const containerRef = useRef(null);

  return (
    <section className={styles.galleryContainer}>
      <motion.h2
        className={styles.galleryTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
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
