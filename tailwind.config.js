/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        primary: '#141414',
        secondary: '#323437',
        accent: '#FFC3A2',
        green: '#1EBA53',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
