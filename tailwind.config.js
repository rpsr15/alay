const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    letterSpacing: {
      widest: "0.5em",
    },
    extend: {
      colors: {
        "oyster-bay": "#d5eaec",
        "oyster-bay-light": "#F1F8F9",
        "oyster-bay-dark": "#AABBB",
        "secondary": "#F8A888",
        "secondary-dark": "#C6866D",
        "secondary-light": "#FCE0D4",
        "background-gray": "#eaeeef",
        "tint-dark-gray":'#7a8c8c',
        'tint-black': '#2f2e2e',
      },
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        playfair: ["Playfair Display"],
        greatvibes: ["Great Vibes"],
        allura:["Allura"],
      },
      aspectRatio:{
        'product-image-ratio': '402 / 495'
      },
    },
  },
  plugins: [],
};
