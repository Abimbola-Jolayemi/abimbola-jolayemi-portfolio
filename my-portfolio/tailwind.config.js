/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors: {
          gold: '#B8860B',
          dark: '#1a1a1a',
          light: '#f5f5f5',
        },
        fontFamily: {
          playfair: ['"Playfair Display"', 'serif'],
        },
    },
  },
  plugins: [],
}

