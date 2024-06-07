/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#17888E',
        'secondary-1': '#8B8B8C',
        'secondary-2': '#A1A1A1',
        'light': '#DEEBEC',
        'light-2': '#DCDDDD',
        'dark': '#474443'
      },
      aspectRatio: {
        '3/2': '3 / 2',
      },
    },
  },
  plugins: [],
}