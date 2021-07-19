import React from 'react';

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
    <section className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1'>
      <h2 className='sr-only'>Image Gallery</h2>
      <ResponsiveImage imageSrcSet={images.milkBottles} />
      <ResponsiveImage imageSrcSet={images.orange} />
      <ResponsiveImage imageSrcSet={images.cone} />
      <ResponsiveImage imageSrcSet={images.sugarCubes} />
    </section>
  );
};

export default Gallery;
