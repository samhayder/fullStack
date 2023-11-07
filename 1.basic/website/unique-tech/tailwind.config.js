/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./*.{html,js}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        exo: "'Exo 2', sans-serif;",
      },
      colors: {
        primary: "#ffc038",
        secondary: "#464646",
        secondary_title: "#464646",
        blob: "#f26c4f",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "50px",
        },
      },
    },
  },
  plugins: [],
};
