/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "OpenSans-ExtraBold": ["OpenSans-ExtraBold"],
        "OpenSans-Bold": ["OpenSans-Bold"]
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
