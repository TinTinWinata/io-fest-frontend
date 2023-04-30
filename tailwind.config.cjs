const colors = require('tailwindcss/colors');

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
    colors: {
      'dark-blue': '#0f1441',
      'dark-blue-calm': '#1b2357',
      'light-blue': '#e3eefc',
      'gray-950': '#0a0e17',
      'gray-925': '#0f1624',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      violet: colors.violet,
      sky: colors.sky,
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
