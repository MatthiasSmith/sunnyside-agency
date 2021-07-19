import React from 'react';

const FooterNav = () => {
  return (
    <nav className='footer-nav'>
      <ul className='footer-nav__list flex justify-center mt-10 mb-8 text-cyanFooterText text-lg'>
        <li className='footer-nav__list-item'>
          <a href='#'>About</a>
        </li>
        <li className='footer-nav__list-item ml-14'>
          <a href='#'>Services</a>
        </li>
        <li className='footer-nav__list-item ml-14'>
          <a href='#'>Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
