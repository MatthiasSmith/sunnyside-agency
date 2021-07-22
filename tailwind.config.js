module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // neutral colors
      blue4: 'hsl(212, 27%, 19%)' /* Very dark desaturated blue */,
      blue3: 'hsl(213, 9%, 39%)' /* Very dark grayish blue */,
      blue2: 'hsl(232, 10%, 55%)' /* Dark grayish blue*/,
      blue1: 'hsl(210, 4%, 67%)' /* Grayish blue */,
      // primary colors
      blueText: 'hsl(198, 62%, 26%)',
      blueBg: 'hsl(200, 100%, 62%)',
      blueBtnBg: 'hsl(200, 100%, 72%)',
      softRed: 'hsl(7, 99%, 70%)',
      brightYellow: 'hsl(51, 100%, 49%)',
      cyanBg: 'hsl(166.8, 44.2%, 69.8%)',
      cyanText: 'hsl(167, 40%, 24%)',
      cyanFooterText: 'hsl(168, 34%, 41%)',
      white: '#fff',
    },
    extend: {
      animation: {
        'fade-slide-down': 'fadeSlideDown 750ms ease-out',
      },
      keyframes: {
        fadeSlideDown: {
          '0%': { opacity: 0, transform: 'translateY(-2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0rem)' },
        },
      },
      backgroundImage: (theme) => ({
        hero: "url('/images/mobile/image-header.jpg')",
        'hero-lg': "url('/images/desktop/image-header.jpg')",
      }),
      fontSize: {
        h1: ['2.5rem', '3.25rem'],
        h1Lg: ['2.625rem', '3.5rem'],
      },
      letterSpacing: {
        '1/4-rem': '0.25rem',
      },
      maxWidth: (theme) => ({
        22: '22rem',
      }),
      spacing: {
        18: '4.5rem',
        41: '10.75rem',
      },
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
