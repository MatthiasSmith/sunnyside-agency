import Head from 'next/head';

import Header from '../components/header';
import Hero from '../components/hero';
import BrandAttribute from '../components/brand-attribute';
import Offers from '../components/offers';
import Testimonials from '../components/testimonials';
import Gallery from '../components/gallery';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Sunnyside agency landing page</title>
        <link rel='icon' href='/images/favicon-32x32.png' />
      </Head>
      <Header />
      <main>
        <Hero />
        <BrandAttribute
          imageSrcSet={[
            {
              mediaQuery: '(max-width: 639px)',
              src: '/images/mobile/image-transform.jpg',
            },
            { src: '/images/desktop/image-transform.jpg', alt: '' },
          ]}
          title='Transform your brand'
          text='We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.'
          isReversed={true}
        />
        <BrandAttribute
          imageSrcSet={[
            {
              mediaQuery: '(max-width: 639px)',
              src: '/images/mobile/image-stand-out.jpg',
            },
            { src: '/images/desktop/image-stand-out.jpg', alt: '' },
          ]}
          title='Stand out to the right audience'
          text='Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and
          extend your brand in digital places.'
          isRed={true}
        />
        <Offers />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
