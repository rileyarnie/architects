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
        "footer-icon": "url('/assets/images/footerIcon.png')",
        "first-company": "url('/assets/images/company1.png')",
        "second-company": "url('/assets/images/company2.png')",
        "third-company": "url('/assets/images/company3.png')",
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
