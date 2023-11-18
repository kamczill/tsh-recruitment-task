/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#4460F7',
        darkBlue: '#2140E8',
        brightOrange: '#F9A52B',
        lightestGray: '#F0F1F5',  // Lightest gray
        lighterGray: '#E0E2EA',   // Slightly darker than the lightest gray
        coolGray: '#B9BDCF',      // A cool, medium gray
        darkGray: '#9194A5',      // Darker gray
        almostBlack: '#1A1B1D',   // Darkest color, close to black
      },
    },
  },
  plugins: [],
}