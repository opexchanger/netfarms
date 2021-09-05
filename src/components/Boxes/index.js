import styles from './boxes.module.scss'

export default function Boxes({ children, inverted, ...restProps }) {
  return (
    <section className={`${styles.wrapper} ${inverted ? styles.wrapper_inverted : ''}`} {...restProps}>
      {children}
    </section>
  );
}

Boxes.BoxImg = function BoxImg({ children, ...restProps }) {
  return (
    <div className={`${styles.box} ${styles.box__img}`} {...restProps}>
      {children}
    </div>
  )
}

Boxes.BoxText = function BoxText({ children, ...restProps }) {
  return (
    <div className={`${styles.box} ${styles.box__text}`} {...restProps}>
      {children}
    </div>
  )
}