/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "first-hero": "url('/assets/images/hero.png')",
      },
      colors: {
        "arch-gray": "#2C2C2C",
        "text-primary": "#BDBDBD",
        "text-secondary": "#333333",
      },
      fontFamily: {
        hoves: ["TThoves", "sans-serif"],
      },
    },
  },
  plugins: [],
};
