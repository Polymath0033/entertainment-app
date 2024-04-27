/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#10141E",
          dark: "#FF8C00",
        },
        secondary: {
          DEFAULT: "#161D2F",
          dark: "#FFC400",
        },
        white: "#FFFFFF",

        red: "#FC4747",
        purple: "#5A698F",
      },
    },
  },
  plugins: [],
};
