/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
      fontWeight: {
        thin: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
    }
  },
  plugins: [],
}