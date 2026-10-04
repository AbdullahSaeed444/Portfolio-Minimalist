import Link from "next/link";
import { siteContent } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.name} href="/" aria-label={siteContent.navigation.homeAriaLabel}>
        {siteContent.name}
      </Link>
      <nav className={styles.navigation} aria-label={siteContent.navigation.ariaLabel}>
        <ThemeToggle />
        {siteContent.navigation.items.map((item) => (
          <Link className={styles.navLink} href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}