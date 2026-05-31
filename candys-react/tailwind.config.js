/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        roxo: {
          DEFAULT: '#6B4C9A',
          dark: '#4E3572',
          light: '#9B7BC8',
          pale: '#F0EBF8',
        },
        amarelo: {
          DEFAULT: '#F4C842',
          dark: '#D4A820',
          pale: '#FDF6D8',
        },
        creme: {
          DEFAULT: '#FDFAF3',
          dark: '#F0E8D4',
        },
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
