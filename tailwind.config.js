/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matrix': '#00FF41',         /* Verde brillante principal */
        'matrix-dark': '#008F11',    /* Verde medio para bordes inactivos y textos secundarios */
        'matrix-darker': '#003B00',  /* Verde muy oscuro para fondos */
        'matrix-bg': '#050505',      /* Casi negro para el fondo general */
      },
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      keyframes: {
        scanlines: {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '0 -4px' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        scanlines: 'scanlines 0.5s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}