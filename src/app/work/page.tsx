import { ProjectList } from "@/components/project-list";
import styles from "../interior.module.css";

export const metadata = {
  title: "Work",
  description: "Selected software engineering and analysis work. Case study details are TODO: real content.",
};

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <section className={styles.headingGrid} aria-labelledby="work-title">
        <div>
          <p className={styles.eyebrow}>Selected work / 01</p>
          <h1 className={styles.title} id="work-title">
            Work
          </h1>
        </div>
        <p className={styles.lede}>
          Software engineering, data analysis, and business analysis. Case study
          details: TODO: real content.
        </p>
      </section>
      <ProjectList />
    </main>
  );
}