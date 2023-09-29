const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", //Just in time compiler
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-image": `url('/assets/bgImage.png')`,
      }),
      colors: {
        primary: "#202225",
        secondary: "#5865f2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
