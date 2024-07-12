/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridAutoRows: {
        'auto': 'auto',
        'min': 'min-content',
        'max': 'max-content',
        'fr': '1fr',
      },
    },
  },
  plugins: [],
}

