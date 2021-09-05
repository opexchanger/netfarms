import Head from 'next/head';

import ImageRound from '../components/ImageRound';
import Button from '../components/Button';
import Contact from '../containers/Contact';
import PartnersSwiper from '../components/PartnersSwiper';
import Produtos from '../containers/Produtos';
import Section from '../containers/Section';

import { products } from '../data/products';

export default function Home() {
  return (
    <>
      <Head>
        <title>Netfarms | Exportação de cafés</title>
        <meta name="description" content="A NetFarms é uma comercial e exportadora de cafés, parceira do seu negócio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
      </Head>

      <Section title="Quem Somos" image={<ImageRound src="/img/quem-somos.jpg" alt="Fruta na árvore" />}>
        <p>Lorem vel sit domus ipsum dolor
          amet, consectetuer adipiscing elit,
          sed diam nonummy aliquam erat
          minim veniam, sedom quis comodo
          consequat diam nonummy.</p>
        <p>Duis autem vel eum dolors iriure
          dolor in hendrerit in vulputate velit
          esse molestie consequat.</p>
        <p>Lorem ipsum dolor sit diam tincidunt
          <strong> ut laoreet dolore magna amne dolor
            sit zzril delenit augue domne duis.</strong></p>

        <Button href="/quem-somos" title="Descubra mais">
          Descubra mais
        </Button>
      </Section>

      <Section inverted title="Nossos Serviços" image={<ImageRound src="/img/nossos-servicos.jpg" alt="Sacos de café no armazém" />}>
        <p>Lorem velaw sit domus ipsum dolor
          amet, at consectetuer adipiscing elit,
          sed diame erat mini ipsum dolor sit
          diam tincidunt tul genbrit amnos <strong>ut
            laoreet dolore magna amne dolor sit
            zzril delenit augue domne duis</strong>.</p>

        <Button href="/servicos" title="Descubra mais">
          Descubra mais
        </Button>
      </Section>

      <Section title="As Fazendas" image={<ImageRound src="/img/fazendas.jpg" alt="Campos de café" />}>
        <p>Lorem vel sit domus ipsum dolor
          amet, consectetuer adipiscing elit,
          sed diam nonummy aliquam erat
          minim veniam, sedom quis comodo
          consequat diam nonummy.
          Duis autem vel eum dolors iriure
          dolor in hendrerit in vulputate velit
          esse molestie consequat.
          Lorem ipsum dolor sit diam tincidunt
          <strong>ut laoreet dolore magna amne dolor
            sit zzril delenit augue domne duis.</strong></p>

        <Button href="/agro" title="Descubra mais">
          Descubra mais
        </Button>
      </Section>

      <PartnersSwiper />

      <Produtos title="Conheça os nossos produtos" products={products} description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt dolore magna aliquam erat minim veniam, quis nostrud tation ullamcor suscipit ea
          commodo consequat ipsum no siane diam nonummy dolor siet." />

      <Contact />
    </>
  )
}
