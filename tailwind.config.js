/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fake-white': '#F5F5F5',
        'blue-marin': '#0A80F9',
        'grey': '#979797',
      },
      fontFamily: {
        museo: ['Museo Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
