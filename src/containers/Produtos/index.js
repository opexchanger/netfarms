import Product from '../../components/Product';
import ProductsGrid from '../../components/ProductsGrid';
import SectionTitle from '../../components/SectionTitle';

import styles from './produtos.module.scss';

function Produtos({ title, description, products }) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <SectionTitle>{title}</SectionTitle>
        <p className={styles.text}>{description}</p>

        <ProductsGrid>
          {products.map(({ id, imgSrc, title, active }) => (
            active &&
            <Product key={id} imgSrc={imgSrc} title={title} />
          ))}
        </ProductsGrid>
      </div>
    </section>
  );
}

export default Produtos;