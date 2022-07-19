const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        infoconf: {
          yellow: {
            100: "#fff601",
          },
          orange: {
            100: "#FFC837",
          },
          blue: {
            100: "#386cb9",
            200: "#174793",
          },
        },
      },
      screens: {
        tall: { raw: "(max-width: 640px)" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
