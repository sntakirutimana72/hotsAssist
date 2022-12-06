/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darken: '#171727',
        lighten: 'rgb(153, 153, 147.9)',
      },
    },
  },
  plugins: [],
};
