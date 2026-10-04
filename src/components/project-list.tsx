import Link from "next/link";
import { work } from "@/data/work";
import styles from "./project-list.module.css";

type ProjectListProps = {
  compact?: boolean;
};

export function ProjectList({ compact = false }: ProjectListProps) {
  const projects = compact ? work.slice(0, 1) : work;

  return (
    <ol className={styles.list}>
      {projects.map((project, index) => (
        <li className={styles.item} key={project.slug}>
          <span className={styles.number} aria-hidden="true">
            0{index + 1}
          </span>
          <div className={styles.copy}>
            <p className={styles.discipline}>{project.discipline}</p>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.summary}>{project.summary}</p>
          </div>
          <Link className={styles.link} href={`/work/${project.slug}`}>
            Read case study
          </Link>
        </li>
      ))}
    </ol>
  );
}