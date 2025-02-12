/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#F4F4F4",
        secondary: "#0C0C0C",
        accent: "#b100cd",
      },
      fontFamily: {
        zenDots: ["Zen Dots"],
        inter: ["Inter", "san-serif"],
      },
    },
  },
  plugins: [],
};
