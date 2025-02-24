import React, { useState } from "react";
import styles from "./ProjectCard.module.css"; // Create this file

const ProjectCard = ({ src, h3, p, description, technologies, link }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleClick}
    >
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <img src={src} alt={h3} className={styles.projectImage} />
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>
        <div className={styles.cardBack}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
