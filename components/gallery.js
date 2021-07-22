import React from 'react';
import { Scene } from 'react-scrollmagic';

import ResponsiveImage from './responsive-image';

const images = {
  milkBottles: [
    {
      src: '/images/mobile/image-gallery-milkbottles.jpg',
      mediaQuery: '(max-width: 479px)',
    },
    {
      src: '/images/desktop/image-gallery-milkbottles.jpg',
      alt: 'Filled milk bottles in front of a blue sky with fluffy clouds',
    },
  ],
  orange: [
    {
      src: '/images/mobile/image-gallery-orange.jpg',
      mediaQuery: '(max-width: 479px)',
    },
    {
      src: '/images/desktop/image-gallery-orange.jpg',
      alt: 'An orange sliced in half on a plate',
    },
  ],
  cone: [
    {
      src: '/images/mobile/image-gallery-cone.jpg',
      mediaQuery: '(max-width: 479px)',
    },
    { src: '/images/desktop/image-gallery-cone.jpg', alt: 'Ice cream cone' },
  ],
  sugarCubes: [
    {
      src: '/images/mobile/image-gallery-sugar-cubes.jpg',
      mediaQuery: '(max-width: 479px)',
    },
    {
      src: '/images/desktop/image-gallery-sugar-cubes.jpg',
      alt: 'Stacked sugar cubes',
    },
  ],
};

const Gallery = () => {
  return (
    <Scene classToggle='slide-in' reverse={false} offset={-200}>
      <section className='animate grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1'>
        <h2 className='sr-only'>Image Gallery</h2>
        <div className='image-container'>
          <ResponsiveImage imageSrcSet={images.milkBottles} loading='lazy' />
        </div>
        <div className='image-container'>
          <ResponsiveImage imageSrcSet={images.orange} loading='lazy' />
        </div>
        <div className='image-container'>
          <ResponsiveImage imageSrcSet={images.cone} loading='lazy' />
        </div>
        <div className='image-container'>
          <ResponsiveImage imageSrcSet={images.sugarCubes} loading='lazy' />
        </div>
        <style jsx>
          {`
            @media (prefers-reduced-motion: no-preference) {
              .animate .image-container {
                opacity: 0;
                position: relative;
                transform: translateX(-50%);
                transition: opacity 700ms ease-out, transform 700ms ease-out;
                z-index: 4;
              }

              .animate.slide-in .image-container {
                opacity: 1;
                transform: translateX(0%);
              }

              .animate .image-container:nth-of-type(2) {
                transition-delay: 150ms;
                z-index: 3;
              }

              .animate .image-container:nth-of-type(3) {
                transition-delay: 300ms;
                z-index: 2;
              }

              .animate .image-container:last-of-type {
                transition-delay: 450ms;
                z-index: 1;
              }
            }
          `}
        </style>
      </section>
    </Scene>
  );
};

export default Gallery;
