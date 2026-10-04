import Link from "next/link";
import { siteContent, visibleSocials } from "@/content/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.availability}>{siteContent.availability}</p>
      <div className={styles.footerActions}>
        <Link className={styles.contactLink} href="/contact">
          {siteContent.footer.contactLink}
        </Link>
        {visibleSocials.map((social) => (
          <a
            key={social.label}
            className={styles.footerActionLink}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.label}
          </a>
        ))}
      </div>
      <span className={styles.credit}>{siteContent.name}</span>
    </footer>
  );
}