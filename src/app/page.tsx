import Link from "next/link";
import { ProjectList } from "@/components/project-list";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroMain}>
          <p className={styles.eyebrow}>Independent practice / 2026</p>
          <h1 className={styles.title} id="home-title">
            Software
            <br />
            engineer <span className={styles.ampersand}>&</span>
            <br />
            analyst.
          </h1>
        </div>
        <aside className={styles.heroAside}>
          <p className={styles.intro}>
            I work across software engineering, data analysis, and business
            analysis.
          </p>
          <p className={styles.availability}>
            Available for remote and part-time contract work.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryLink} href="/work">
              Explore work
            </Link>
            <Link className={styles.secondaryLink} href="/contact">
              Contact me
            </Link>
          </div>
        </aside>
        <p className={styles.indexMark} aria-hidden="true">
          01 / 04
        </p>
      </section>

      <section className={styles.workSection} aria-labelledby="work-heading">
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Selected work</p>
          <h2 className={styles.sectionTitle} id="work-heading">
            Problem to outcome.
          </h2>
          <Link className={styles.allWork} href="/work">
            All work
          </Link>
        </div>
        <ProjectList compact />
      </section>

      <section className={styles.focusSection} aria-labelledby="focus-heading">
        <p className={styles.eyebrow}>Practice</p>
        <h2 className={styles.focusTitle} id="focus-heading">
          Useful work, clearly explained.
        </h2>
        <p className={styles.focusCopy}>
          Software engineering, data analysis, and business analysis. TODO: real
          content about the problems I help solve.
        </p>
      </section>
    </main>
  );
}
