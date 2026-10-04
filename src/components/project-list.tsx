import Link from "next/link";
import { projects } from "@/content/projects";
import { siteContent } from "@/content/site";
import styles from "./project-list.module.css";

type ProjectListProps = {
  compact?: boolean;
};

export function ProjectList({ compact = false }: ProjectListProps) {
  const visibleProjects = compact ? projects.slice(0, 1) : projects;

  return (
    <ol className={styles.list}>
      {visibleProjects.map((project, index) => (
        <li className={styles.item} key={project.slug}>
          <span className={styles.number} aria-hidden="true">
            0{index + 1}
          </span>
          <div className={styles.copy}>
            <p className={styles.discipline}>{project.category}</p>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.summary}>{project.summary}</p>
          </div>
          <Link className={styles.link} href={`/work/${project.slug}`}>
            {siteContent.pages.caseStudy.projectLink}
          </Link>
        </li>
      ))}
    </ol>
  );
}