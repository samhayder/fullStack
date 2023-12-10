/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./*.{html,js}"],
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        oxygen: "'Oxygen', sans-serif;",
      },
      colors: {
        primary: "#f85606",
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
