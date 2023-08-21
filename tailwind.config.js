/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
    },
    lineHeight: {
      sm: '16px',
      base: '20px',
      lg: '28px',
      xl: '36px',
    },

    fontWeight: {
      regular: 400,
      medium: 500,
    },

    letterSpacing: {
      normal: '0em',
      tight: '-2px',
    },

    fontFamily: {
      sans: [
        'Jost',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },

    fontStyling: {
      h1: 'font-sans font-medium text-2xl leading-xl',
      h2: 'font-sans font-medium text-xl leading-lg',
      h3: 'font-sans font-medium text-lg leading-lg',
      h4: 'font-sans font-medium text-base leading-lg',
      h5: 'font-sans font-medium text-sm leading-base',

      subtitle:
        'font-sans font-regular text-xs lineHeight-[16px] letterSpacing-[-2%]',
      p: 'font-sans font-regular text-base leading-base letterSpacing-[-2%]',
    },

    borderRadius: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
    },

    extend: {
      colors: {
        ciTrans15: 'rgba(100, 221, 192, 0.15)',
        ci: '#60E6C5',
        ciDark: '#1D9384',
        ciDarkest: '#1D353D',

        dangerBg: '#F013131A',
        dangerLightest: '#FE9A9A',
        dangerLight: '#FF6060',
        danger: '#F82F2F',
        dangerDarkest: '#321623',

        warningBg15: 'rgba(234, 179, 8, 0.15)',
        warning: '#EAB308',
        warningDarkest: '#312E22',

        gray: '#D1D5DB',
        grayDarker: '#9CA3AF',
        darkBorderBox: '#374151',
        bgInput: '#1F2937',
        bgBoxLighter: '#17202F',
        bgBox: '#101726',
        bgBoxDarker: '#0D1321',
        bgDark: '#000314',
      },
    },
  },
  plugins: [],
}
