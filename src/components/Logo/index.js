import Link from 'next/link';

import styles from './logo.module.scss';

export default function Logo() {
  return (
    <Link href="/" title="Home">
      <a>
        <h2 className={styles.logo}>NetFarms</h2>
      </a>
    </Link>
  );
}