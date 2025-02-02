/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#333333',
        gunmetal: '#2a2a2a',
        lightGray: '#e0e0e0'
      },
      height: {
        '30rem': '40rem',
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin'),
    nextui()
  ],
}

