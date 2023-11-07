/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#01051e",
        "primary-light": "#020726",
        "primary-dark": "#010417",
        secondary: "#ff7d3b",
        gray: "#333",
        blob: "#A427DF",
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
