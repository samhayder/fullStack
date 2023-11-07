/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        exo: "'Exo 2', sans-serif;",
      },
      colors: {
        primary: "#282828",
        secondary: "#ff6d6d",
        gray: "#8286a4",
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
    clipPath: {
      designPolygon: " polygon(100% 30%, 0% 100%, 100% 100%)",
      newDesignPolygon: "polygon(0 0, 25% 0, 100% 100%, 0% 100%)",
      browserPolygon: "polygon(60% 60%, 100% 20%, 100% 100%, 60% 100%)",
      footerPolygon: "polygon(100% 0, 30% 0, 100% 100%)",
    },
  },
  plugins: [require("tailwind-clip-path"), require("@tailwindcss/forms")],
};
