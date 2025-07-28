/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
      },
      animation: {
        blur: "blur 150ms linear forward",
      },
      keyframes: {
        blur: {
          "0%": { filter: "blur(5px)" },
          "100%": { filter: "blur(0px)" },
        },
      },
    },
  },
  plugins: [],
};
