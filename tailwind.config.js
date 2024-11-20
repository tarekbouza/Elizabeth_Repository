/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid'
  ],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.5)', opacity: '1' }
        }
      },
      animation: {
        twinkle: 'twinkle 5s infinite ease-in-out alternate'
      }
    },
  },
  plugins: [],
};
