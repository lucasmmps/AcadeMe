/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          softWhite: "var(--softWhite)",
          softGray: "var(--softGray)",
          lightGray: "var(--lightGray)",
          softBlue: "var(--blue)",
          darkBlue: "var(--darkBlue)",
          lightBlue: "var(--lightBlue)",
      }
    },
  },
  plugins: [],
}

