/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#373F67',
        secondary: '#5A85EE',
        tertiary: '#719CF7',
        contents: '#9DA1B4',
        contentsSecondary: '#919191',
        negative: '#E11900',
      },
      fontSize: {
        mySize8: '0.5rem',
        mySize10: '0.625rem',
        mySize200: '12.5rem',
      },
      width: {
        mySize300: '18.75rem',
      },
      backgroundImage: {
        'icon-search': 'url("/assets/icon-search.svg")',
        'icon-plus': 'url("/assets/icon-plus.svg")',
        'icon-checked': 'url("/assets/icon-checked.svg")',
      },
    },
  },
  plugins: [],
};
