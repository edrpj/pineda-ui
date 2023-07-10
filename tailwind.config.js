/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-brand": "#f6f6f6",
        "brown-brand": "#383838",
      }
    },
  },
  plugins: [],
};
