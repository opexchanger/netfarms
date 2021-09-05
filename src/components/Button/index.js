import Link from 'next/link'

import styles from './button.module.scss'

export default function Button({ href, title, children, ...restProps }) {
  return (
    <Link href={href}>
      <a title={title} {...restProps} className={styles.btn}>
        {children}
      </a>
    </Link>
  );
}