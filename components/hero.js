import React from 'react';

import ResponsiveImage from './responsive-image';

const Hero = () => {
  return (
    <section className='-mt-24 relative z-0'>
      <div className='absolute w-full top-36 px-6 left-1/2 -translate-x-1/2 sm:top-28 md:top-36 lg:top-40'>
        <h1 className='text-h1 lg:text-h1Lg tracking-1/4-rem font-serif uppercase text-center text-white'>
          We are creatives
        </h1>
        <img
          className='block mx-auto mt-12 lg:mt-16'
          src='/images/icon-arrow-down.svg'
          alt=''
        />
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
    </section>
  );
};

export default Hero;
