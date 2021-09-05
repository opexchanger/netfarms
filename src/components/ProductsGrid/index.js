import styles from './products-grid.module.scss'

export default function ProductsGrid({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}