const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Raleway", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
