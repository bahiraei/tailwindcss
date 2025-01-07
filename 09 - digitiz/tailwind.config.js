/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      /*padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },*/
    },
    extend: {
      fontFamily: {
        sans: ['IRANSans'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

