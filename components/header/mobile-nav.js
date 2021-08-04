import React from 'react';

const MobileNav = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <nav
          id='mobile-nav'
          className='bg-white absolute top-28 z-20 sm:shadow-md md:hidden'
        >
          <ul className='text-center text-blue2 text-lg py-8'>
            <li>
              <a href='#' className='focus:outline-dashed-blue'>
                About
              </a>
            </li>
            <li className='mt-6'>
              <a href='#' className='focus:outline-dashed-blue'>
                Services
              </a>
            </li>
            <li className='mt-6'>
              <a href='#' className='focus:outline-dashed-blue'>
                Projects
              </a>
            </li>
            <li className='mt-8 mb-4'>
              <a
                href='#'
                className='bg-brightYellow text-blue4 py-4 px-7 uppercase font-serif text-sm rounded-full focus:outline-dashed-blue'
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
      <style jsx>
        {`
          @keyframes fade-in {
            0%: {
              opacity: 0;
            }
            99%: {
              opacity: 1;
            }
            100% {
              opacity: 1;
              display: block;
            }
          }

          #mobile-nav {
            animation: fade-in 0.3s ease-out 0s forwards;
            width: calc(100% - 3rem);
            opacity: 0;
          }

          #mobile-nav::before {
            content: '';
            position: absolute;
            background: linear-gradient(
              to bottom right,
              transparent 0%,
              transparent 50%,
              #fff 50%,
              #fff 100%
            );
            height: 1.675rem;
            width: 1.675rem;
            top: -1.675rem;
            right: 0;
          }
        `}
      </style>
    </>
  );
};

export default MobileNav;
