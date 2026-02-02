/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        cyber: "#0ea5e9",
        lime: "#22c55e"
      }
    },
  },
  plugins: [],
};
