import styles from './form.module.scss';

export default function Form() {
  return (
    <form id="contact-form" className={styles.form}>
      <div className={styles.form__group}>
        <input
          type="text"
          className={styles.form__input}
          placeholder="Nome Completo (obrigatório)"
          id="name"
          name="from_name"
          required
        />
        <label htmlFor="name" className={styles.form__label}>Nome Completo</label>
      </div>

      <div className={styles.form__group}>
        <input
          type="email"
          className={styles.form__input}
          placeholder="Email (obrigatório)"
          id="email"
          name="from_email"
          required
        />
        <label htmlFor="email" className={styles.form__label}>Email</label>
      </div>

      <div className={`${styles.form__group} ${styles.form__groupRadio}`}>
        <div className={styles.form__radio_group}>
          <input
            type="radio"
            className={styles.form__radio_input}
            id="sell"
            value="Quero expor o meu café"
            name="subject"
          />
          <label htmlFor="sell" className={styles.form__radio_label}>
            <span className={styles.form__radio_button}></span>
            Quero expor o meu café
          </label>
        </div>

        <div className={styles.form__radio_group}>
          <input
            type="radio"
            className={styles.form__radio_input}
            id="buy"
            value="Quero comprar café"
            name="subject"
          />
          <label htmlFor="buy" className={styles.form__radio_label}>
            <span className={styles.form__radio_button}></span>
            Quero comprar café
          </label>
        </div>

        <div className={styles.form__radio_group}>
          <input
            type="radio"
            className={styles.form__radio_input}
            id="other"
            value="Outro"
            name="subject"
          />
          <label htmlFor="other" className={styles.form__radio_label}>
            <span className={styles.form__radio_button}></span>
            Outro
          </label>
        </div>
      </div>

      <div className={`${styles.form__group} ${styles.form__groupArea}`}>
        <textarea
          rows="6"
          className={styles.form__input}
          placeholder="Alguma coisa a mais que queira dizer pra gente?"
          id="message"
          name="message">
        </textarea>
        <label htmlFor="message" className={styles.form__label}>Sua mensagem</label>
      </div>

      <button className={styles.form__button}>Enviar Mensagem</button>
    </form >
  );
}