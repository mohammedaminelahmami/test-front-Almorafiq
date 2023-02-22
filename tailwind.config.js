/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxl: { max: "1630px" },
        // => @media (max-width: 1630px) { ... }

        xl: { max: "1200px" },
        // => @media (max-width: 1280px) { ... }
  
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
  
        md_lg: { max: "867px" },
        // => @media (max-width: 867px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        md700 : {max: "700px"},
        // => @media (max-width: 700px) { ... }
  
        sm: { max: "500px" },
        // => @media (max-width: 639px) { ... }

        xs : {max: "360px"},
        // => @media (max-width: 360px) { ... }
      },
      animation: {
        scale: 'scale .5s ease-in-out',
      },
      colors: {
        'primary': '#07AAA5',
        'secondary': '#81B843',
        'tertiary': '#6FEFBB',
        'footerBg': "#e8e6e6",
        'footertxt': "#4B54E4"
      },
    },
  },
  plugins: [],
}