import Image from 'next/image'

import Header from '../Header'

import styles from './hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Header />

      <div className={styles.wrapper}>
        <div className={`${styles.boxes}`}>
          <div className={`${styles.box} ${styles.boxLeft}`}>
            <h1 className={styles.hero__title}>
              Comercial e <strong>exportadora</strong> de <strong>cafés</strong>
            </h1>
            <h2 className={styles.hero__subTitle}>
              Parceiros do Seu Negócio
            </h2>
          </div>

          <div className={`${styles.box} ${styles.boxRight}`}>
            <div className={styles.hero__imgShape}>
              <Image src="/img/hero.jpg" alt="Coffee with beans picture"
                width="700px" height="400px" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}