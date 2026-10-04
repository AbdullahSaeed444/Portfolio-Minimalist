import { ProjectList } from "@/components/project-list";
import { siteContent } from "@/content/site";
import styles from "../interior.module.css";

export const metadata = siteContent.metadata.pages.work;

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <section className={styles.headingGrid} aria-labelledby="work-title">
        <div>
          <p className={styles.eyebrow}>{siteContent.pages.work.eyebrow}</p>
          <h1 className={styles.title} id="work-title">
            {siteContent.pages.work.title}
          </h1>
        </div>
        <p className={styles.lede}>{siteContent.pages.work.intro}</p>
      </section>
      <ProjectList />
    </main>
  );
}