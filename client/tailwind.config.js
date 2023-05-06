/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#5c6cf4",
        accentlight: "#7884e8",
        accentsuperlight: '#bac1fa',
        accentbutyoucanbarelyseeit: "#e9ebfd"
      }
    },
  },
  plugins: [],
}