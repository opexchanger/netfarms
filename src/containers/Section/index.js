import Boxes from '../../components/Boxes';
import SectionTitle from '../../components/SectionTitle';

import styles from './section.module.scss'

export default function Section({ title, image, children, inverted, ...restProps }) {
  return (
    <section className={styles.wrapper} {...restProps}>
      <div className={styles.container}>

        <Boxes inverted={inverted}>
          <Boxes.BoxImg>
            {image}
          </Boxes.BoxImg>

          <Boxes.BoxText>
            <SectionTitle>{title}</SectionTitle>
            {children}
          </Boxes.BoxText>
        </Boxes>
      </div>
    </section>
  );
}