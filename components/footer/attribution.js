import React from 'react';

const Attribution = () => {
  return (
    <div className='attribution max-w-xs mx-auto font-serif text-xs text-cyanFooterText text-center mt-20'>
      Challenge by{' '}
      <a
        className='font-sans text-blueText hover:underline focus:underline focus:outline-dashed-cyan'
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        className='font-sans text-blueText hover:underline focus:underline focus:outline-dashed-cyan'
        href='https://portfolio-matthiassmith.vercel.app'
      >
        Matthias Smith
      </a>
      .
    </div>
  );
};

export default Attribution;
