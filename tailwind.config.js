/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'inactive_text': '#737373',
        'inactive_line': '#DBDBDB'
      },
    },
  },
  plugins: [],
}

