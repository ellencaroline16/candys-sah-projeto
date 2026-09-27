/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        verde: {
          DEFAULT: '#7CC5B5',
          dark:    '#5BA898',
          light:   '#A8DAD0',
          pale:    '#E8F4F2',
        },
        rosa: {
          DEFAULT: '#E8829A',
          dark:    '#C4607A',
          light:   '#F0A0B0',
          pale:    '#FCEEF1',
        },
        marrom: {
          DEFAULT: '#2C1810',
          mid:     '#6B3A2A',
          light:   '#A0614A',
          muted:   '#C49A8A',
        },
        creme: {
          DEFAULT: '#FDFAF3',
          dark:    '#F0E8D4',
        },
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans:  ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
