module.exports = {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        robotocondensed: ['Roboto Condensed', 'sans-serif'],
        robotoflex: ['Roboto Flex', 'sans-serif'],
        robotoserif: ['Roboto Serif', 'serif'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}