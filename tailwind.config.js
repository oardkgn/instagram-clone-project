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
        'inactive_line': '#DBDBDB',
        'active_profile_nav': '#262626',
      },
    },
    screens: {
      'showSuggests': '1150px',
      'mobileForm': '750px',
      'mini': '335px',
    },
  },
  plugins: [],
}

