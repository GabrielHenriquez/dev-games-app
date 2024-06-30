import { colors } from "./src/common/styles/colors";
import { fontsFamily } from "./src/common/styles/fonts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontsFamily,
    },
  },
  plugins: [],
};
