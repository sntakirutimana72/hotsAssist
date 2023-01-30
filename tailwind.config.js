/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        darken: '#171727',
        blueish: '#0f172a',
        lighten: 'rgb(153, 153, 147.9)',
        whiten: '#f3f4f7',
        around: {
          0: '#e8e8e8',
          40: '#e8e8e840',
          60: '#e8e8e860',
          70: '#e8e8e870',
          80: '#e8e8e880',
          90: '#e8e8e890',
        },
      },
      boxShadow: {
        shavy: '-12px 1px 6px rgba(0, 0, 0, 0.07)',
        nighty: '0 1px 4px #99f6e4',
        gravy: '0 1px 5px rgba(0, 0, 0, 0.3)',
        down: '0 3px 8px orangered',
      },
    },
  },
  plugins: [],
};
