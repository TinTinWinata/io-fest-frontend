/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/assets/login-background.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
