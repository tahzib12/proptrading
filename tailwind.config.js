/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tinos: ['Tinos', 'serif'],
        anton: ['Anton', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        robotoflex: ['Roboto Flex', 'sans-serif'],
      },
      screens: {
        'sm': {'max': '600px'}, // Up to 600px
        'md': {'min': '601px', 'max': '900px'}, // 601px to 900px
        'lg': {'min': '901px'}, // 901px and above
      },
    },
  },
  plugins: [],
}
