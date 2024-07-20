import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./EduExCard.module.css";

const EduExCard = ({ title, subtitle, duration, description }) => {
  return (
    <motion.div
      className={styles.EduExCard}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <Typography variant="h4" component="div" className={styles.title}>
            {" "}
            {title}{" "}
          </Typography>{" "}
          <Typography
            variant="h6"
            color="text.secondary"
            className={styles.subtitle}
          >
            {" "}
            {subtitle}{" "}
          </Typography>{" "}
          <Typography
            variant="body1"
            color="text.secondary"
            className={styles.duration}
          >
            {" "}
            {duration}{" "}
          </Typography>{" "}
          <Typography variant="body1" className={styles.description}>
            {" "}
            {description}{" "}
          </Typography>{" "}
        </CardContent>{" "}
      </Card>{" "}
    </motion.div>
  );
};

EduExCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

EduExCard.defaultProps = {
  title: "",
  subtitle: "",
  duration: "",
  description: "",
};

export default EduExCard;
