import Head from 'next/head';

import Contact from '../../containers/Contact';

export default function Contato() {
  return (
    <>
      <Head>
        <title>Netfarms | Exportação de cafés - Contato</title>
        <meta name="description" content="A NetFarms é uma comercial e exportadora de cafés, parceira do seu negócio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
      </Head>

      <Contact />
    </>
  )
}
