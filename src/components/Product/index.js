import Image from 'next/image'

import styles from './product.module.scss'

export default function Product({ imgSrc, title }) {
  return (
    <article className={styles.wrapper}>
      <Image src={imgSrc} width="400" height="250" objectFit="cover" alt={title}></Image>
      <span className={styles.title}>{title}</span>
    </article>
  );
}