/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: '#1D9384',
        'primary-dark': '#1D9384',
        secondary: '#374151',
        'secondary-dark': '#374151',

        ci: '#60E6C5',
        ciTrans: '#60E6C526',
        grayDarker: '#9CA3AF',

        dark: '#101010',

        darkBlue: '#000314',

        // #64DDC026
        // background: #60E6C5;
        // background: #1D9384;
        // background: #1D353D;
        // background: #F013131A;
        // background: #FE9A9A;
        // background: #FF6060;
        // background: #F82F2F;
        // background: #321623;
        // background: #EAB30826;
        // background: #EAB308;
        // background: #312E22;
        // background: linear-gradient(0deg, #000315, #000315),
        // linear-gradient(0deg, #FFFFFF, #FFFFFF);
      },
    },
  },
  plugins: [],
}
