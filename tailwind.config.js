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
    },
  },
  plugins: [],
}
