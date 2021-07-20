import React from 'react';

const FooterNav = () => {
  return (
    <nav className='mt-10 mb-8'>
      <ul className='flex justify-center text-cyanFooterText text-lg'>
        <li className='hover:text-white transition-colors duration-200 ease-out'>
          <a href='#'>About</a>
        </li>
        <li className='hover:text-white ml-14 transition-colors duration-200 ease-out'>
          <a href='#'>Services</a>
        </li>
        <li className='hover:text-white ml-14 transition-colors duration-200 ease-out'>
          <a href='#'>Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
