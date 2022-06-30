const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      widest: '0.5em'
    },
    extend: {
      colors: {
        'oyster-bay': '#D5EAEC',
        'oyster-bay-light': '#F1F8F9',
        'oyster-bay-dark': '#AABBB',
        'secondary': '#FCB08C',
        'secondary-dark':'#FCB08C'
      },
      fontFamily: {
       montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
       playfair:['Playfair Display']
        
      }
    },
  },
  plugins: [],
}
