import Image from 'next/image';

import styles from './image-round.module.scss'

export default function ImageRound({ src, alt }) {
  return (
    <div className={styles.wrapper}>
      <Image src={src} width="600" height="600" objectFit="cover" alt={alt} />
    </div>
  );
}