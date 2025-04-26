/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        custom: ['E111Viva', 'serif'], // <-- fixed
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
