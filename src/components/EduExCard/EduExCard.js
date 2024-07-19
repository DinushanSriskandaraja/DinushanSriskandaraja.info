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
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {" "}
            {title}{" "}
          </Typography>{" "}
          <Typography variant="subtitle1" color="text.secondary">
            {" "}
            {subtitle}{" "}
          </Typography>{" "}
          <Typography variant="subtitle2" color="text.secondary">
            {" "}
            {duration}{" "}
          </Typography>{" "}
          <Typography variant="body2"> {description} </Typography>{" "}
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
