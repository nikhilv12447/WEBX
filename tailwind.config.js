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
        backgroundSec: "#F9FAFB",
        placeholderPrimary: "#667085",
        expert: "#17B26A",
        bgExpert: "#17B26A1A",
        intermediate: "#ECA518",
        bgIntermediate: "#FCB21F1A",
        amature: "#F04438",
        bgAmature: "#F044381A"
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

