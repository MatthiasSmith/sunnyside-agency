import React, { useState } from 'react';
import MobileNav from './mobile-nav';

import NavList from './nav-list';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className='py-8 px-6 relative bg-blueBg z-10'>
      <nav className='flex justify-between items-center'>
        <a href='#' className='focus:outline-dashed-white'>
          <img src='/images/logo.svg' alt='Navigate home' />
        </a>
        <NavList />
        <button
          className='md:hidden focus:outline-dashed-white'
          type='button'
          title='Toggle mobile nav menu'
          onClick={toggleMobileNav}
        >
          <img src='/images/icon-hamburger.svg' alt='' />
        </button>
      </nav>
      <MobileNav isOpen={isMobileNavOpen} />
      <style jsx>{`
        a:focus {
          outline: 2px dashed white;
        }
      `}</style>
    </header>
  );
};

export default Header;
