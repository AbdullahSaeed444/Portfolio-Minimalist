import styles from "../interior.module.css";

export const metadata = {
  title: "About",
  description: "About TODO: real name, software engineer and data/business analyst.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.headingGrid} aria-labelledby="about-title">
        <div>
          <p className={styles.eyebrow}>About / 02</p>
          <h1 className={styles.title} id="about-title">
            About
          </h1>
        </div>
        <p className={styles.lede}>
          I’m a software engineer and data/business analyst looking for remote
          and part-time contract work.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Background</h2>
        <div className={styles.sectionContent}>
          <p>TODO: real content about my background, approach, and experience.</p>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Focus</h2>
        <div className={styles.sectionContent}>
          <p>Software engineering</p>
          <p>Data analysis</p>
          <p>Business analysis</p>
          <p>Specific tools and strengths: TODO: real content.</p>
        </div>
      </section>
    </main>
  );
}