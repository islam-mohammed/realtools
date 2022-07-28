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
        cta: "#FFCE31",
        paragraphLight: "#000103",
        paragraphDark: "#FFF",
        heading: "#2F2F2F",
        sectionTitle: "#021850",
        sectionDarkTitle: "#FFF",
        cardBackground: "#F6F8FD",
        cardBorderColor: "#F9F9F9",
        sectionColor: "#E8EFFF",
        footerColor: "#4A4A4A",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.serif],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
