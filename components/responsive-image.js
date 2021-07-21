import React from 'react';

const ResponsiveImage = ({ imageSrcSet, ...otherProps }) => {
  const { className, ...moreProps } = otherProps;

  return (
    <picture className={className}>
      {imageSrcSet &&
        imageSrcSet.length &&
        imageSrcSet.map((source, i) => {
          return source.mediaQuery ? (
            <source srcSet={source.src} media={source.mediaQuery} key={i} />
          ) : (
            <img
              className='w-full'
              src={source.src}
              alt={source.alt}
              key={i}
              {...moreProps}
            />
          );
        })}
    </picture>
  );
};

export default ResponsiveImage;
