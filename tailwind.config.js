/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Neris SemiBold', 'sans-serif'],
        bold: ['Neris Black', 'sans-serif']
      },
      colors: {
        'pink': '#FCDCE2',
        'sky': '#CDE9F3',
        'caramel': '#F8ECD1',
        'grey': '#6B7280',
        'black': '#151618'
      },
      animation: {
        'bounce-slow': 'bounce 5s infinite',
        'bounce-md': 'bounce 3s infinite',
        'bounce-xslow': 'bounce 7s infinite',
      }
    },
  },
  plugins: [],
}
