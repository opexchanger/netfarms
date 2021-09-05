import Head from 'next/head';

import ImageRound from '../../components/ImageRound';
import Section from '../../containers/Section';

export default function QuemSomos() {
  return (
    <>
      <Head>
        <title>Netfarms | Exportação de cafés - Agro</title>
        <meta name="description" content="A NetFarms é uma comercial e exportadora de cafés, parceira do seu negócio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
      </Head>

      <Section title="As Fazendas" image={<ImageRound src="/img/fazendas.jpg" alt="Campos de café" />}>
        <p>
          Lorem ipsum dolor sit amet, cons elit, dolore onsequat, vel
          illum dolore eu feu dignissim qui blandit praesent luptatum
          hendrerit in vulputate velit aug esse molestie blandit praesent
          luptatum hendrerit in vulputate velit aug esse <strong>tinc
            dolore magna dolor sit zzril delenit augue duis</strong>.
        </p>
      </Section>

      <Section inverted title="Os Pomares" image={<ImageRound src="/img/pomares.jpeg" alt="Árvores e frutos" />}>
        <p>
          Lorem ipsum dolor sit amet, cons elit, dolore onsequat,
          vel illum dolore eu feu dignissim qui blandit praesent
          luptatum hendrerit in vulputate velit aug esse molestie
          blandit praesent luptatum hendrerit in vulputate velit
          aug esse <strong>tinc dolore magna dolor sit zzril delenit
            augue duis</strong>.
        </p>
        <p>
          Lorem ipsum dolor sit amet, cons elit, dolore onsequat,
          luptatum hendrerit in vulputate velit aug Lorem ipsum
          dolor sit amet, cons elit, dolor Lorem ipsum dolor sit
          amet, ate velit aug esse hendrerit in vulputate.
        </p>
        <p>
          Blandit praesent luptatum hendrerit ing ese domus
          <strong>dolore magna dolor sit zzril delenit augue duis</strong>.
        </p>
      </Section>
    </>
  )
}
