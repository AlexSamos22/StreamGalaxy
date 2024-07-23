/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#333333',
        gunmetal: '#2a2a2a',
        lightGray: '#e0e0e0'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

