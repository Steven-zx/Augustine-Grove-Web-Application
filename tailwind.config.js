module.exports = {
  content: [
    './index.html',          // Make sure this path is correct for your HTML file
    './src/**/*.html',       // Include all HTML files within the src folder if needed
    './src/**/*.js',         // Include all JavaScript files that use Tailwind CSS
  ],
  darkMode: 'media',         // You can keep this if you want dark mode based on system preference
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}