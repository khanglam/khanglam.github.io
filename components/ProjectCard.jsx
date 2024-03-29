import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <Image
        src={project.image}
        height={600}
        width={600}
        alt={project.name}
        style={{
          borderRadius: "20px 20px 0 0",
        }}
      />
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.cta}>
        {project.source_code && (
          <a
            href={project.source_code}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Repo
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
