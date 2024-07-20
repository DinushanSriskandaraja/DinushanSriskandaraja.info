// ImageCard.jsx or ImageCard.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const ImageCard = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
  width = "150px",
  height = "auto",
}) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
        width,
        height,
      }}
      className={twMerge(
        "drag-elements absolute bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    />
  );
};

export default ImageCard;
