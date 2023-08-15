/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: '#f7287b',
        'primary-dark': '#c2185b',
        secondary: '#c717fc',
        'secondary-dark': '#aa00ff',
        success: '#00ff00',
        'success-dark': '#00aa00',
        stone: '#a0a0a0',
        'stone-dark': '#808080',

        dark: '#101010',
        'dark-light': '#212121',
      },
    },
  },
  plugins: [],
}
