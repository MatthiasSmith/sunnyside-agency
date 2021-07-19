import React from 'react';

const Header = () => {
  return (
    <header className='header py-8 px-6 relative bg-blueBg z-10'>
      <nav className='nav flex justify-between items-center'>
        <a className='nav__logo' href='#'>
          <img
            className='nav__logo-img'
            src='/images/logo.svg'
            alt='Navigate home'
          />
        </a>
        <ul className='nav-list hidden md:flex text-white items-center'>
          <li className='nav-list__item'>
            <a href='#'>About</a>
          </li>
          <li className='nav-list__item ml-11'>
            <a href='#'>Services</a>
          </li>
          <li className='nav-list__item ml-11'>
            <a href='#'>Projects</a>
          </li>
          <li className='ml-11'>
            <a
              href='#'
              className=' text-blue4 bg-white text-sm rounded-full px-8 py-4 font-serif uppercase'
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          className='nav__mobile-nav-btn md:hidden'
          type='button'
          title='toggle mobile nav menu'
          // onClick='toggleMobileNav()'
        >
          <img src='/images/icon-hamburger.svg' alt='' />
        </button>
      </nav>
      <nav className='hidden' id='mobile-nav'>
        <ul className='mobile-nav-list'>
          <li className='mobile-nav-list__item'>
            <a href='#'>About</a>
          </li>
          <li className='mobile-nav-list__item'>
            <a href='#'>Services</a>
          </li>
          <li className='mobile-nav-list__item'>
            <a href='#'>Projects</a>
          </li>
          <li className='mobile-nav-list__item mobile-nav-list__item--btn'>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
