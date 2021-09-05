import Image from 'next/image';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { partners } from '../../data/partners';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './swiper.module.scss';

export default function PartnersSwiper() {
  return (
    <section className={styles.partners}>
      <div className={styles.slides__wrapper}>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={2}
          navigation
          loop={true}
          breakpoints={{
            "350": {
              "slidesPerView": 3,
            },
            "600": {
              "slidesPerView": 4,
            },
            "900": {
              "slidesPerView": 6,
            }
          }}
        >
          {
            partners.map(({ id, src, alt }) => (
              <SwiperSlide key={id}>
                <Image src={src} alt={alt} height="50" width="60" objectFit="contain" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section >
  );
}