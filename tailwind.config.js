import { colors } from "./src/common/styles/Colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: colors,
      fontfamily: {
        regular: "Sora_400Regular",
        medium: "Sora_500Medium",
        semiBold: "Sora_600SemiBold",
        bold: "Sora_700Bold",
      },
    },
  },
  plugins: [],
};
