/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'gill': ['Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS']
      },
      width: {
        'inherit': ['inherit']
      },
      height: {
        'inherit': ['inherit']
      }
    },
  },
  plugins: [],
}

