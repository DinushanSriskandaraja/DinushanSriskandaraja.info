import React from "react";
import "../styles/about.css";

function AboutPage() {
  return (
    <div className="about">
      <section className="about-section">
        <h2> Education </h2>{" "}
        <ul>
          <li>
            {" "}
            Higher Diploma in IT(Reading)— SLIIT City Uni, Mar 2023 - Present{" "}
          </li>{" "}
          <li>
            {" "}
            Diploma in English— Esoft Metro Campus, Dec 2019 - June 2020{" "}
          </li>{" "}
          <li>
            {" "}
            Diploma in IT— Esoft Metro Campus, Dec 2019 - June 2020{" "}
          </li>{" "}
          <li>
            {" "}
            G.C.E Advanced Level— Hindu College Colombo, Jan 2021 - Feb 2023{" "}
          </li>{" "}
          <li>
            {" "}
            G.C.E Ordinary Level— Hindu College Colombo, Jan 2019 - Dec 2019{" "}
          </li>{" "}
        </ul>{" "}
      </section>
      <section className="about-section">
        <h2> Experience </h2>{" "}
        <div className="experience-item">
          <h3> Front End Developer— Aizenit </h3> <p> Aug 2022 - Apr 2023 </p>{" "}
          <ul>
            <li>
              {" "}
              Enhanced user interface in web applications using Angular.{" "}
            </li>{" "}
            <li> Resolved privilege based issues. </li>{" "}
            <li> Technologies: Angular, TypeScript, Material UI </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="experience-item">
          <h3> Manual Quality Assurance— Aizenit </h3>{" "}
          <p> June 2022 - Aug 2022 </p>{" "}
          <ul>
            <li> Conducted testing for Android and web applications. </li>{" "}
            <li> Created and maintained test cases. </li>{" "}
            <li> Technologies: Manual Testing </li>{" "}
          </ul>{" "}
        </div>{" "}
      </section>
      <section className="about-section">
        <h2> Projects </h2>{" "}
        <div className="project-item">
          <h3> Mattel Tracker Gold Stock Manager </h3>{" "}
          <ul>
            <li>
              {" "}
              Developed an Android application using Java and Firebase for real
              - time gold stock management.{" "}
            </li>{" "}
            <li>
              {" "}
              Integrated APIs, ensured secure authentication, and managed data
              effectively.{" "}
            </li>{" "}
            <li> Technologies: Java, Android Studio, Firebase </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="project-item">
          <h3> Student Management System </h3>{" "}
          <ul>
            <li>
              {" "}
              Developed a system to manage student details using Express.js,
              MongoDB, Bootstrap, HTML, and jQuery.{" "}
            </li>{" "}
            <li>
              {" "}
              Implemented backend logic, integrated REST APIs, and ensured
              responsive design.{" "}
            </li>{" "}
            <li>
              {" "}
              Technologies: Express.js, MongoDB, Bootstrap, HTML5, jQuery{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="project-item">
          <h3> MatureThought Social Media </h3>{" "}
          <ul>
            <li>
              {" "}
              Developed a social media platform to assess user maturity levels
              through situational multiple choice questions.{" "}
            </li>{" "}
            <li>
              {" "}
              Handled full stack development, including feature development,
              database management, and UI design.{" "}
            </li>{" "}
            <li> Technologies: PHP, CSS, MySQL </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div className="project-item">
          <h3> Inov8IT Management System </h3>{" "}
          <ul>
            <li>
              {" "}
              Developed a comprehensive management system for Sujitha Jewellery
              using JavaFX and MySQL.{" "}
            </li>{" "}
            <li>
              {" "}
              Created the employee data management module and integrated live
              gold price API.{" "}
            </li>{" "}
            <li> Technologies: JavaFX, Heroku, MySQL </li>{" "}
          </ul>{" "}
        </div>{" "}
      </section>
      <section className="about-section">
        <h2> Skills & Tools </h2>{" "}
        <ul>
          <li>
            {" "}
            <strong> Languages: </strong> PHP, SQL, JAVA, Python
          </li>
          <li>
            {" "}
            <strong> Frontend: </strong> Angular, CSS, TypeScript, JavaScript
          </li>
          <li>
            {" "}
            <strong> Backend: </strong> Express, Spring Boot
          </li>
          <li>
            {" "}
            <strong> Database: </strong> MongoDB, MySQL, Firebase
          </li>
          <li>
            {" "}
            <strong> UI: </strong> Tailwind CSS, Material UI, Bootstrap
          </li>
        </ul>{" "}
      </section>{" "}
    </div>
  );
}

export default AboutPage;
