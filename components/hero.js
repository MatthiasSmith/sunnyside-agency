import React from 'react';

import ResponsiveImage from './responsive-image';

const Hero = () => {
  return (
    <section className='hero-section bg-blueBg -mt-24 relative z-0'>
      <div className='absolute w-full top-36 px-6 left-1/2 -translate-x-1/2 sm:top-28 md:top-36 lg:top-40'>
        <h1 className='text-h1 lg:text-h1Lg tracking-1/4-rem font-serif uppercase text-center text-white opacity-0 motion-safe:animate-fade-slide-down'>
          We are creatives
        </h1>
        <div id='down-arrow-container'>
          <img
            className='down-arrow mx-auto mt-12 lg:mt-16 opacity-0 motion-safe:animate-fade-slide-down'
            src='/images/icon-arrow-down.svg'
            alt=''
          />
        </div>
      </div>
      <ResponsiveImage
        imageSrcSet={[
          {
            src: '/images/mobile/image-header.jpg',
            mediaQuery: '(max-width: 639px)',
          },
          { src: '/images/desktop/image-header.jpg', alt: '' },
        ]}
      />
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .down-arrow {
            animation-delay: 400ms;
          }

          .hero-section {
            min-height: calc(100vw / 375 * 538);
          }

          @media screen and (min-width: 40em) {
            .hero-section {
              min-height: calc(100vw / 9 * 5);
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
