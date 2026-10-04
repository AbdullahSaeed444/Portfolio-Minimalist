import Link from "next/link";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.availability}>Open to remote, part-time contracts</p>
      <Link className={styles.contactLink} href="/contact">
        Contact
      </Link>
      <span className={styles.credit}>TODO: real name</span>
    </footer>
  );
}