/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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