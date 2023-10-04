const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        monaSans: ['Mona Sans', 'sans-serif'],
        sourceSerif: ['Source Serif 4', 'serif'],
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
};
