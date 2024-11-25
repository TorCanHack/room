/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mgray: '#A0A0A0'
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
      fontSize: {
        40: '2.5rem'
      },
      height: {
        1538: '96rem'
      },
      inset: {
        17: '17rem',
        322: '24rem'
      },
      letterSpacing: {
        wide5: '5.83px',
        wide12: '12.5px'
      },
      lineHeight: {
        cutsome22: '22px'
      },
      width: {
        232: '14.5rem',
        375: '23.438rem'
      }
    },
  },
  plugins: [],
}

