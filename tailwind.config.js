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
      },
      width: {
        main: "calc(100vw - 268px)"
      },
      margin: {
        mainTop: "72px",
        mainLeft: "268px"
      },
      backgroundImage: {
        mainGradent: "linear-gradient(99.94deg, #068A90 75.84%, #9FF21C 121.17%)",
        secondaryGradent: "linear-gradient(92.9deg, #088C8E 1.06%, #9CF01E 165.91%)",
        gradent3: "linear-gradient(104.14deg, #068A90 45.89%, #9FF21C 155.66%)"
      },
      fontFamily: {
        mikado: "mikado",
        stolzl: "stolzl"
      },
      boxShadow: {
        mainShadow: "0 0 39px 0 #70E00059"
      }
    },
  },
  plugins: [],
}

