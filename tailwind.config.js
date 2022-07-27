/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1849C6",
        secondary: "#FFBE0B",
        danger: "#FB5607",
        warning: "#FF7B00",
        paragraphLight: "#000103",
        paragraphDark: "#FFF",
        heading: "#2F2F2F",
        sectionTitle: "#021850",
        sectionDarkTitle: "#FFF",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
