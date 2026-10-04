import Link from "next/link";
import styles from "./site-header.module.css";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.name} href="/" aria-label="TODO: real name, home">
        TODO: real name
      </Link>
      <nav className={styles.navigation} aria-label="Main navigation">
        {navigation.map((item) => (
          <Link className={styles.navLink} href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}