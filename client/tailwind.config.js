/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        primary: "#06b6d4",
        dark: "#020617",
        card: "#0f172a",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

    },
  },

  plugins: [],
}