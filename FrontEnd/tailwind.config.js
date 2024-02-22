/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        'custom-brown': '#5C4B51',
        'custom-red': '#EE6163',
        'custom-white': '#FDFCF7',
      }
    },
  },
  plugins: [],
}
