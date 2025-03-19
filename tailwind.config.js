/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Vibrant blue
        secondary: '#1d4ed8', // Indigo
        accent: '#fbbf24', // Amber
        background: '#f9fafb', // Light gray
        textPrimary: '#111827', // Dark gray
        textSecondary: '#6b7280', // Medium gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern font
      },
    },
  },
  plugins: [],
};
  