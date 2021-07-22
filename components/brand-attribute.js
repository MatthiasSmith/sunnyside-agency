import React from 'react';
import { Scene } from 'react-scrollmagic';

import ResponsiveImage from './responsive-image';

const BrandAttribute = ({ imageSrcSet, title, text, isRed, isReversed }) => {
  return (
    <Scene classToggle='slide-in' reverse={false} offset={isReversed ? 200 : 0}>
      <section
        className={`sm:flex ${isReversed ? 'animate-reversed' : 'animate'}`}
      >
        <div
          className={`image-container sm:w-1/2 ${
            isReversed ? 'sm:order-2' : 'sm:order-1'
          }`}
        >
          <ResponsiveImage imageSrcSet={imageSrcSet} />
        </div>
        <div
          className={`py-16 sm:w-1/2 sm:items-center sm:justify-center sm:py-0 sm:px-4 md:px-0 ${
            isReversed ? 'sm:order-1' : 'sm:order-2'
          }`}
        >
          <div className='text-center md:text-left max-w-xs mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center md:items-start sm:h-full lg:max-w-md'>
            <h2 className='font-serif text-3xl text-blue4 font-extrabold'>
              {title}
            </h2>
            <p className='text-lg sm:text-base md:text-lg text-blue2 mt-5'>
              {text}
            </p>
            <a
              className={`link-underline inline-block relative font-serif uppercase text-blue4 mt-6 ${
                isRed ? 'red' : 'yellow'
              }-underline`}
              href='#'
            >
              Learn more
            </a>
          </div>
        </div>
        <style jsx>
          {`
            .link-underline::after {
              content: '';
              border-radius: 2rem;
              position: absolute;
              bottom: 0;
              left: 50%;
              height: 0.55rem;
              width: 114.5%;
              transition: opacity 0.2s ease-out;
              transform: translateX(-50%);
              opacity: 0.25;
              z-index: -1;
            }

            .red-underline::after {
              background: hsl(7, 99%, 70%);
            }

            .yellow-underline::after {
              background: hsl(51, 100%, 49%);
            }

            .link-underline:hover::after,
            .link-underline:focus::after {
              opacity: 1;
            }

            @media (prefers-reduced-motion: no-preference) {
              .animate > div,
              .animate-reversed > div {
                opacity: 0;
                transition: transform 750ms ease-out, opacity 700ms ease-out;
              }

              .animate > div:first-child,
              .animate-reversed > div:last-child {
                transform: translateX(-100%);
              }

              .animate-reversed > div:first-child,
              .animate > div:last-child {
                transform: translateX(100%);
              }

              .animate.slide-in > div,
              .animate-reversed.slide-in > div {
                transform: translateX(0%);
                opacity: 1;
              }
            }
          `}
        </style>
      </section>
    </Scene>
  );
};

export default BrandAttribute;
