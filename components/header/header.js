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
        <a href='#'>
          <img src='/images/logo.svg' alt='Navigate home' />
        </a>
        <NavList />
        <button
          className='md:hidden'
          type='button'
          title='Toggle mobile nav menu'
          onClick={toggleMobileNav}
        >
          <img src='/images/icon-hamburger.svg' alt='' />
        </button>
      </nav>
      <MobileNav isOpen={isMobileNavOpen} />
    </header>
  );
};

export default Header;
