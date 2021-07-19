import React from 'react';

import ResponsiveImage from './responsive-image';

const Offer = ({ title, text, imageSrcSet, classes }) => {
  return (
    <>
      <div
        className={`${classes} absolute bottom-16 md:bottom-6 lg:bottom-16 text-center w-full max-w-22 left-1/2 -translate-x-1/2`}
      >
        <h2 className='text-3xl font-serif'>{title}</h2>
        <p className='mt-8 md:mt-3 lg:mt-8'>{text}</p>
      </div>
      <ResponsiveImage imageSrcSet={imageSrcSet} />
    </>
  );
};

const Offers = () => {
  return (
    <section className='sm:flex'>
      <div className='relative flex-auto'>
        <Offer
          classes='text-cyanText'
          title='Graphic design'
          text='Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.'
          imageSrcSet={[
            {
              src: '/images/mobile/image-graphic-design.jpg',
              mediaQuery: '(max-width: 767px)',
            },
            {
              src: '/images/desktop/image-graphic-design.jpg',
              alt: '',
            },
          ]}
        />
      </div>
      <div className='relative flex-auto'>
        <Offer
          classes='text-blueText'
          title='Photography'
          text='Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.'
          imageSrcSet={[
            {
              src: '/images/mobile/image-photography.jpg',
              mediaQuery: '(max-width: 767px)',
            },
            {
              src: '/images/desktop/image-photography.jpg',
              alt: '',
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Offers;
