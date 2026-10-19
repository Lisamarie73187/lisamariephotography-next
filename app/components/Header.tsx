import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const leftLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Me" },
];
const rightLinks = [
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

function NavLinks({ links }: { links: typeof leftLinks }) {
  return (
    <ul className={styles.links}>
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} className={styles.link}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Site-wide sticky navigation. Links are plain anchors so they work from any page. */
export default function Header() {
  return (
    <header className={styles.header}>
      <nav aria-label="Primary" className={styles.nav}>
        <NavLinks links={leftLinks} />
        <Link href="/" className={styles.logo} aria-label="Lisa Marie Photography, home">
          <Image
            src="/assets/LisaMariePhotography.gif"
            alt="Lisa Marie Photography"
            width={593}
            height={273}
            sizes="(max-width: 767px) 120px, 170px"
            unoptimized
            priority
          />
        </Link>
        <NavLinks links={rightLinks} />
      </nav>
    </header>
  );
}
