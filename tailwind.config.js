/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'gunsmoke': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
      },
      transitionProperty: {
        'bg-color': 'background-color',
        'text-color': 'color',
        'colors': 'background-color, color',
      },
      boxShadow: {
        shadowko: '0 2px 7px rgba(235, 235, 235, 0.3)',
      },
      }
    },
  },
  plugins: [],
};
