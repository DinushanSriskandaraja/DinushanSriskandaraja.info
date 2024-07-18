import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css"; // Import CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={styles.navLink}
          >
            Home{" "}
          </Link>{" "}
        </li>{" "}
        <li className={styles.navItem}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={styles.navLink}
          >
            About{" "}
          </Link>{" "}
        </li>{" "}
        <li className={styles.navItem}>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={styles.navLink}
          >
            Projects{" "}
          </Link>{" "}
        </li>{" "}
        <li className={styles.navItem}>
          <Link
            to="experiences"
            spy={true}
            smooth={true}
            duration={500}
            className={styles.navLink}
          >
            Experiences{" "}
          </Link>{" "}
        </li>{" "}
        <li className={styles.navItem}>
          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className={styles.navLink}
          >
            Education{" "}
          </Link>{" "}
        </li>{" "}
      </ul>{" "}
    </nav>
  );
};

export default Navbar;
