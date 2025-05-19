/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.html',
    './index.html',
    './amenities.html',
    './announcements.html',
    './about.html',
    './try.html',
    './concerns.html',
    './profile.html',
    './announcement_detail.html',
    './create_announcement.html',
    './about.html',
    './gallery.html',
    './cal.html',
    './cal_copy.html',
    './booking_form.html',
    './src/**/*.html',
    './src/**/*.js',
    './bookings.html',
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
        custom: ['E111Viva', 'serif'], 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
