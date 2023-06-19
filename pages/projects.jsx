import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";
import Background from "../styles/FloatingLogosBackground";

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <div className={styles.parent_container}>
        <div className={styles.background}>
          <Background />
        </div>
        <h3 style={{ zIndex: 2 }}>Recent Projects</h3>
        <div className={styles.container}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsPage;
