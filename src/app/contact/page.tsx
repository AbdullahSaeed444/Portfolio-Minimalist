import Link from "next/link";
import { siteContent } from "@/content/site";
import styles from "../interior.module.css";

export const metadata = siteContent.metadata.pages.contact;

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.headingGrid} aria-labelledby="contact-title">
        <div>
          <p className={styles.eyebrow}>{siteContent.pages.contact.eyebrow}</p>
          <h1 className={styles.title} id="contact-title">
            {siteContent.pages.contact.title}
          </h1>
        </div>
        <p className={styles.lede}>{siteContent.pages.contact.intro}</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>{siteContent.pages.contact.emailLabel}</h2>
        <div className={styles.sectionContent}>
          <p>{siteContent.contactEmail}</p>
          <p>
            <Link href="/work">{siteContent.home.allWorkLink}</Link>
          </p>
        </div>
      </section>
    </main>
  );
}