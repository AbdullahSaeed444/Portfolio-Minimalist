import { siteContent } from "@/content/site";
import styles from "../interior.module.css";

export const metadata = siteContent.metadata.pages.about;

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.headingGrid} aria-labelledby="about-title">
        <div>
          <p className={styles.eyebrow}>{siteContent.pages.about.eyebrow}</p>
          <h1 className={styles.title} id="about-title">
            {siteContent.pages.about.title}
          </h1>
        </div>
        <p className={styles.lede}>
          I’m a software engineer and data/business analyst looking for remote
          and part-time contract work.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>{siteContent.pages.about.biographyLabel}</h2>
        <div className={styles.sectionContent}>
          <p>{siteContent.biography}</p>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>{siteContent.pages.about.skillsLabel}</h2>
        <div className={styles.sectionContent}>
          {siteContent.skills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
      </section>
    </main>
  );
}