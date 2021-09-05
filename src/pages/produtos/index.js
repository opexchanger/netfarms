import Head from 'next/head';

import Produtos from '../../containers/Produtos'

import { products } from '../../data/products';

export default function Home() {
  return (
    <>
      <Head>
        <title>Netfarms | Exportação de cafés - Produtos</title>
        <meta name="description" content="A NetFarms é uma comercial e exportadora de cafés, parceira do seu negócio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
      </Head>

      <Produtos title="Cafés de Exportação" products={products} description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        erat minim veniam, quis nostrud tation ullamcor suscipit ea commodo consequat diam nonummy dolor sit." />

      <Produtos title="Citrus Mercado Interno" products={products} description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
        erat minim veniam, quis nostrud tation ullamcor suscipit ea commodo consequat diam nonummy dolor sit." />
    </>
  )
}
