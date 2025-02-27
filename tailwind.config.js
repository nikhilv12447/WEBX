/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tertiary: "#475467",
        darkGreen: "#004B23",
        primaryText: "#101828",
        borderSecondary: "#D0D5DD",
        border3: "#E4E7EC",
        backgroundSec: "#F9FAFB"
      },
      keyframes: {
        btnOn: {
          "0%, 100%": { right: "0px" }
        }
      },
      animation: {
        btnOn: "btnOn 1s linear"
      },
      height: {
        main: "calc(100vh - 72px)"
      }
    },
  },
  plugins: [],
}

