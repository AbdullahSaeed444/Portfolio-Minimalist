import Link from "next/link";
import { siteContent } from "@/content/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.availability}>{siteContent.availability}</p>
      <Link className={styles.contactLink} href="/contact">
        {siteContent.footer.contactLink}
      </Link>
      <span className={styles.credit}>{siteContent.name}</span>
    </footer>
  );
}