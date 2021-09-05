import Image from 'next/image';

import { certifications } from '../../data/certifications';

import styles from './certifications.module.scss';

export default function Certifications() {
  return (
    <section className={styles.certif}>
      <div className={styles.certif__container}>
        {certifications.map(({ src, alt }) => (
          <Image key={src} src={src} height="50" width="85" objectFit="contain" alt={alt} />
        ))}
      </div>
    </section>
  );
}
