/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#dffdfb",
        primary: "#66d2bc",
      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        oleo: ["Oleo Script", "cursive"],
      },
    },
  },
  plugins: [],
};
