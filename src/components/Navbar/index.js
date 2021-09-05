import Link from "next/link";
import { useRouter } from "next/router";

import styles from './navbar.module.scss'

import { menuItems } from '../../data/menu';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {menuItems.map(({ text, link, active }) => (
          active &&
          <li key={link} className={`${styles.navbar__list__item} ${router.pathname == link ? styles.active : ""}`}>
            <Link href={link}>
              <a>{text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}