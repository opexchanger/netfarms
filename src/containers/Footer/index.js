import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__pages}>
          <h3 className={styles.footer__title}>Páginas</h3>
          <ul>
            <li>
              <a href="/pagina" className={styles.footer__link}>Página 1</a>
            </li>
            <li>
              <a href="/pagina" className={styles.footer__link}>Página 2</a>
            </li>
            <li>
              <a href="/pagina" className={styles.footer__link}>Página 3</a>
            </li>
            <li>
              <a href="/pagina" className={styles.footer__link}>Página 4</a>
            </li>
          </ul>
        </div>

        <div className={styles.footer__contact}>
          <h3 className={styles.footer__title}>Contato</h3>
          <p className={styles.footer__text}>telefone</p>
          <p className={styles.footer__text}>telefone 2</p>
          <p className={styles.footer__text}>email</p>
        </div>

        <div className={styles.footer__address}>
          <h3 className={styles.footer__title}>Endereço</h3>
          <p className={styles.footer__text}>endereço</p>
        </div>

        <div className={styles.footer__media}>
          <h3 className={styles.footer__title}>Media</h3>
          <ul>
            <li>
              <a href="/linkedin" target="_blank">
                <i className={["fab", "fa-linkedin", styles.icon].join(' ')}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className={["fab", "fa-whatsapp-square", styles.icon].join(' ')}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}