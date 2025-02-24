import React from "react";
import styles from "./ProjectsStyles.module.css";
import pihealth from "../../assets/pi-health.png";
import societyzen from "../../assets/societyzen.png";
import ecommerce from "../../assets/ecommerce.png";
import textextracter from "../../assets/text-extracter.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  const projectsData = [
    {
      src: pihealth,
      h3: "Pi-health",
      p: "React,Typescript",
      description:
        "PiHealth is a hospital management application built with React, TypeScript, and other modern technologies to enhance operational efficiency and patient care. It leverages tools like Jotai, Felte, and Dexie, powered by Vite and ElectronJS for a seamless experience.",
      technologies: "React, TypeScript, Redux",
    },
    {
      src: societyzen,
      h3: "Societyzen",
      p: "React,Typescript",
      description:
        "SocietyZen is a society management application built with React and TypeScript to streamline operations for roles like administrators and residents. It leverages Jotai, Felte, Zod, and Dexie, powered by Vite and ElectronJS for a seamless cross-platform experience. This stack enhances community engagement and administrative efficiency.",
      technologies: "React, TypeScript, Node.js",
    },
    {
      src: ecommerce,
      h3: "Ecommerce Website",
      p: "Java",
      description:
        "The E-commerce Website is built with Java, Servlets, JSP, and Hibernate ORM to provide a seamless online retail experience. It combines efficient data management with a responsive UI, offering features like product browsing and secure checkout for a comprehensive e-commerce solution.",
      technologies: "Java, Spring Boot, MySQL",
    },
    {
      src: textextracter,
      h3: "Gujarati Text Extractor",
      p: "Python",
      description:
        "Gujarati Text-Extractor uses Python and Tesseract OCR to efficiently extract Gujarati text from images. It features a user-friendly interface to streamline text recognition, enhancing accessibility for users working with Gujarati documents. This setup simplifies processing Gujarati scripts.",
      technologies: "Python, OpenCV, Tesseract OCR",
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
