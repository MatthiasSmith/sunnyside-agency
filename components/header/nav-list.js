import React from 'react';

const NavList = () => {
  return (
    <ul className='hidden md:flex text-white items-center'>
      <li>
        <a href='#' className='focus:outline-dashed-white'>
          About
        </a>
      </li>
      <li className='ml-11'>
        <a href='#' className='focus:outline-dashed-white'>
          Services
        </a>
      </li>
      <li className='ml-11'>
        <a href='#' className='focus:outline-dashed-white'>
          Projects
        </a>
      </li>
      <li className='ml-11'>
        <a
          href='#'
          className='text-blue4 bg-white text-sm rounded-full px-8 py-4 font-serif uppercase hover:bg-blueBtnBg hover:text-white focus:bg-blueBtnBg focus:text-white focus:outline-dashed-white transition-colors duration-200 ease-out'
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavList;
