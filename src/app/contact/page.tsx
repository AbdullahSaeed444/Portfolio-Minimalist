import Link from "next/link";
import styles from "../interior.module.css";

export const metadata = {
  title: "Contact",
  description: "Contact TODO: real name about remote and part-time contract work.",
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <section className={styles.headingGrid} aria-labelledby="contact-title">
        <div>
          <p className={styles.eyebrow}>Contact / 03</p>
          <h1 className={styles.title} id="contact-title">
            Contact
          </h1>
        </div>
        <p className={styles.lede}>
          I’m open to remote and part-time contract work. Email: TODO: real
          email.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Availability</h2>
        <div className={styles.sectionContent}>
          <p>Remote / part-time contracts</p>
          <p>Location, timezone, and start date: TODO: real content.</p>
          <p>
            Relevant work is on the <Link href="/work">work page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}