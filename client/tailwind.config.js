/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          700: "#f13542",
          900: "#a6363d"
        }
      }
    }
  },
  plugins: []
};
