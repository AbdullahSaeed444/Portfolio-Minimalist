import Link from "next/link";
import { ProjectList } from "@/components/project-list";
import { siteContent } from "@/content/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroMain}>
          <p className={styles.eyebrow}>{siteContent.eyebrow}</p>
          <h1 className={styles.title} id="home-title">
            {siteContent.headline.firstLine}
            <br />
            {siteContent.headline.secondLine}
            <br />
            <span className={styles.ampersand}>{siteContent.headline.accent}</span>
            {siteContent.headline.punctuation}
          </h1>
        </div>
        <aside className={styles.heroAside}>
          <p className={styles.intro}>{siteContent.intro}</p>
          <p className={styles.availability}>{siteContent.availability}</p>
          <div className={styles.actions}>
            <Link className={styles.primaryLink} href="/work">
              {siteContent.home.exploreWork}
            </Link>
            <Link className={styles.secondaryLink} href="/contact">
              {siteContent.home.contactLink}
            </Link>
          </div>
        </aside>
        <p className={styles.indexMark} aria-hidden="true">
          01 / 04
        </p>
      </section>

      <section className={styles.workSection} aria-labelledby="work-heading">
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>{siteContent.home.selectedWorkEyebrow}</p>
          <h2 className={styles.sectionTitle} id="work-heading">
            {siteContent.home.selectedWorkHeading}
          </h2>
          <Link className={styles.allWork} href="/work">
            {siteContent.home.allWorkLink}
          </Link>
        </div>
        <ProjectList compact />
      </section>

      <section className={styles.focusSection} aria-labelledby="focus-heading">
        <p className={styles.eyebrow}>{siteContent.home.practiceEyebrow}</p>
        <h2 className={styles.focusTitle} id="focus-heading">
          {siteContent.home.practiceHeading}
        </h2>
        <p className={styles.focusCopy}>{siteContent.skills.join(" / ")}</p>
      </section>
    </main>
  );
}
