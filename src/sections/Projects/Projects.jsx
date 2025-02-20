import styles from "./ProjectsStyles.module.css";
import pihealth from "../../assets/pi-health.png";
import societyzen from "../../assets/societyzen.png";
import ecommerce from "../../assets/ecommerce.png";
import textextracter from "../../assets/text-extracter.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={pihealth} h3="Pi-health" p="React,Typescript" />
        <ProjectCard src={societyzen} h3="Societyzen" p="React,Typescript" />
        <ProjectCard
          src={ecommerce}
          link="https://github.com/PatelDhruvil2502/JavaEcommerce.git"
          h3="Ecommerce Website"
          p="Java"
        />
        <ProjectCard
          src={textextracter}
          link="https://github.com/dhruv4023/GujaratiTextExtractor"
          h3="Gujarati Text Extractor"
          p="Python"
        />
      </div>
    </section>
  );
}

export default Projects;
