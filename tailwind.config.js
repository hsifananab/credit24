/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1200px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: '#333333',
      },
      backgroundImage: {
        'gradient-bg':
          'linear-gradient(87.36deg, #CBE3E5 -1.98%, #F2DEA3 102.92%)',
      },
    },
  },
  plugins: [],
};
