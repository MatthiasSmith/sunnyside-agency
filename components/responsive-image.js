import React from 'react';
import Image from 'next/image';

// interface srcMedia {
//   src: '';
//   mediaQuery: '';
// }

const ResponsiveImage = ({ imageSrcSet, ...otherProps }) => {
  const { className } = otherProps;

  return (
    <picture className={className}>
      {imageSrcSet &&
        imageSrcSet.length &&
        imageSrcSet.map((source, i) => {
          return source.mediaQuery ? (
            <source srcSet={source.src} media={source.mediaQuery} key={i} />
          ) : (
            <img className='w-full' src={source.src} alt={source.alt} key={i} />
          );
        })}
    </picture>
  );
};

export default ResponsiveImage;
