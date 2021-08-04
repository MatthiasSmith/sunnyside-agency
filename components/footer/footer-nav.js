import React from 'react';

const FooterNav = () => {
  return (
    <nav className='mt-10 mb-8'>
      <ul className='flex justify-center text-cyanFooterText text-lg'>
        <li>
          <a
            href='#'
            className='hover:text-white focus:text-white focus:outline-dashed-cyan transition-colors duration-200 ease-out'
          >
            About
          </a>
        </li>
        <li className='ml-14'>
          <a
            href='#'
            className='hover:text-white focus:text-white focus:outline-dashed-cyan transition-colors duration-200 ease-out'
          >
            Services
          </a>
        </li>
        <li className='ml-14'>
          <a
            href='#'
            className='hover:text-white focus:text-white focus:outline-dashed-cyan transition-colors duration-200 ease-out'
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
