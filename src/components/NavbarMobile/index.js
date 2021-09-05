import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from './navbar-mobile.module.scss';

import { menuItems } from '../../data/menu';

export default function NavbarMobile() {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      <button
        className={`${styles.btnOpen} ${showNav ? styles.showNav : ""}`}
        aria-label="Abrir a navegação"
        onClick={() => setShowNav((current) => !current)}
      >
        <div></div>
      </button>

      {showNav && (
        <nav className={styles.navMobile}>
          <ul className={styles.navMobile__list}>
            {menuItems.map(({ text, link, active }) => (
              active &&
              <li key={link} className={`${styles.navMobile__list__item} ${router.pathname == link ? "active" : ""}`}>
                <Link href={link}>
                  <a>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )
      }

    </>
  );
}