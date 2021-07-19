import React from 'react';

const Attribution = () => {
  return (
    <div className='attribution max-w-xs mx-auto font-serif text-xs text-cyanFooterText text-center mt-20'>
      Challenge by{' '}
      <a
        className='text-blueText font-sans'
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        className='text-blueText font-sans'
        href='https://portfolio-matthiassmith.vercel.app'
      >
        Matthias Smith
      </a>
      .
    </div>
  );
};

export default Attribution;
