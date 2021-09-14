const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'my-gray': '#f5f5f5',
        title: '#111111',
      },
      backgroundImage: (theme) => ({
        'icon-down': 'url(/src/assets/icon/icondropdown.svg)',
      }),
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      1: '1.5rem',
      2: '2rem',
    },
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      right: 'right',
      top: 'top',
      'center-2': 'right 2.5rem center',
    },
    flex: {
      0: '0 0 auto',
      25: '0 0 25%',
      75: '0 0 75%',
      67: '0 0 66.66667%',
      50: '0 0 50%',
      100: '0 0 100%',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      '2lg': '1200px',
      // => @media (min-width: 1200px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
