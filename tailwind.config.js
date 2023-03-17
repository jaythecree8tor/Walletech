/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}",],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(114,228,133,0.25)',
        'xl': '2px 40px 69px -17px rgba(0,0,0,0.09)',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        larsseit:["Larsseit"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};