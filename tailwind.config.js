/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/primereact/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3700B3',
        'primary-dark': '#3700B3',
        'secondary': '#6c757d',
        'secondary-dark': '#6c757d',
        'success': '#28a745',
        'info': '#17a2b8',
        'warning': '#ffc107',
        'danger': '#dc3545',
        'light': '#f8f9fa',
        'dark': '#343a40',
        'white': '#fff',
        'transparent': 'transparent',
        'current': 'currentColor',
      }
    },
  },
  plugins: [],
}