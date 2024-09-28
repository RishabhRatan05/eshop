/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#00308F",
        "blue-mid": "#1F6AFF",
        "blue-light": "#ADC9FF",
      },
    },
  },
  plugins: [],
}
