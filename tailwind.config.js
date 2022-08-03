/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-grey': '#4e5d78',
        'white-shade': "f6f7f8",
        'red': "#ff5630",
        'blue': "#377dff"
      },
      fontFamily: {
        spartan: "'League Spartan', sans-serif"
      }
    },
  },
  plugins: [],
}
