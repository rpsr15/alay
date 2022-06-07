const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      widest: '0.5em'
    },
    extend: {
      colors: {
        'secondary': '#CCEAEA',
        'secondary-dark':'#B7D2D2'
      },
      fontFamily: {
       montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
       playfair:['Playfair Display']
        
      }
    },
  },
  plugins: [],
}
