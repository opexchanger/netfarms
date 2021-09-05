import SectionTitle from '../../components/SectionTitle';
import Form from '../../components/Form';

import styles from './contact.module.scss';

function Contact() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <SectionTitle>Entre em Contato</SectionTitle>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt dolore magna aliquam erat minim veniam, quis nostrud tation ullamcor.</p>
        <Form />
      </div>
    </section>
  );
}

export default Contact;