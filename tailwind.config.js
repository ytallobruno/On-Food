const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [ //configuração inicial do tailwind
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { //fonte
      fontFamily: {
        sans: [ "Open Sans", ...defaultTheme.fontFamily.sans ],
      }
    },
  },
  plugins: [],
}
