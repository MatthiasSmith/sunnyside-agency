import React from 'react';

const Testimonial = ({ avatarSrc, name, title, quote }) => {
  return (
    <li className='mt-16 md:even:mx-6 md:flex'>
      <article className='text-center mx-auto flex flex-col'>
        <img
          className='rounded-full w-18 mx-auto'
          src={avatarSrc}
          alt={`Portrait of ${name}`}
          loading='lazy'
        />
        <p className='max-w-sm mx-auto text-blue3 text-lg mt-6 md:mt-14 flex-auto'>
          {quote}
        </p>
        <span className='mt-6 md:mt-16 block font-serif text-lg'>{name}</span>
        <span className='mt-2 block text-sm text-blue1'>{title}</span>
      </article>
    </li>
  );
};

const Testimonials = () => {
  return (
    <section className='py-16 md:py-40 px-6'>
      <h2 className='text-center font-serif text-blue1 uppercase tracking-1/4-rem font-bold md:text-lg'>
        Client testimonials
      </h2>
      <ul className='md:flex md:justify-center'>
        <Testimonial
          avatarSrc='/images/image-emily.jpg'
          name='Emily R.'
          title='Marketing Director'
          quote='We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.'
        />
        <Testimonial
          avatarSrc='/images/image-thomas.jpg'
          name='Thomas S.'
          title='Chief Operating Officer'
          quote='Sunnyside’s enthusiasm coupled with their keen interest in our
          brand’s success made it a satisfying and enjoyable experience.'
        />
        <Testimonial
          avatarSrc='/images/image-jennie.jpg'
          name='Jennie F.'
          title='Business Owner'
          quote='Incredible end result! Our sales increased over 400% when we
          worked with Sunnyside. Highly recommended!'
        />
      </ul>
    </section>
  );
};

export default Testimonials;
