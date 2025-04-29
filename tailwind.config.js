/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
  safelist: [
    'translate-x-full',
    'translate-x-0',
    'transform',
    'pointer-events-none',
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
