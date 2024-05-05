/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "grow-border": "grow-border 0.3s ease-in-out forwards",
      },
      keyframes: {
        "grow-border": {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
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
