/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base': '#e6e1dd',
        'whiteGrey': '#fcffff',
        'Grey': '#eeeae7',
        'darkGrey': '#353432',
        'logo': '#858482'
      },
      screens: {
        'xs': '540px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '3rem',
        },
      },
    },
  },
  plugins: [ ],
}

