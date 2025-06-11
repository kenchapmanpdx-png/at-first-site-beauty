/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e6d8db',
          dark: '#dab2b9',
          accent: '#ad3b68'
        },
        gradient: {
          from: '#fbf8f9',
          to: '#f0dfe5'
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
      },
      animation: {
        'float-petals': 'float-and-rotate 15s infinite linear',
        'sparkle': 'sparkle 3.6s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        'float-and-rotate': {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.7' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
        },
        'sparkle': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '0.75' }
        }
      }
    },
  },
  plugins: [],
}