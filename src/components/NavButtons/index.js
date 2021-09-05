import Link from "next/link";
import { useRouter } from "next/router";

import styles from './navButtons.module.scss'

export default function NavButtons() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <ul>
        <li>
          <Link href="/">
            <a className={styles.navBtn}>EN-US</a>
          </Link>
        </li>
        <li >
          <Link href="/admin">
            <a className={styles.navBtn}>Login</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}