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
        'blue': '#CDE9F3',
        'caramel': '#F8ECD1',
        'grey': '#6B7280',
        'black': '#151618'
      },
    },
  },
  plugins: [],
}
