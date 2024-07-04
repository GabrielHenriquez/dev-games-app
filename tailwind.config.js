import { colors } from './src/common/styles/colors';
import { fontsFamily } from './src/common/styles/fonts';

const content = ['./src/app/**/*.{js,jsx,ts,tsx}', './src/common/components/**/*.{js,jsx,ts,tsx}'];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content,
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors,
      fontsFamily,
    },
  },
  plugins: [],
  corePlugin: {
    backgroundOpacity: true,
  },
};
