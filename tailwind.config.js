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
        mySize60: '3.75rem',
        mySize200: '12.5rem',
      },
      width: {
        mySize18: '4.5rem',
        mySize60: '3.75rem',
        mySize103: '6.44rem',
        mySize141: '8.82rem',
        mySize300: '18.75rem',
      },
      spacing: {
        ml6: '0.4rem',
        ml18: '1.125rem',
        for4gui: '0.2rem',
        profileDotTop: '3rem',
        profileDotLeft: '4rem',
        profilePencilTop: '3.15rem',
        profilePencilLeft: '4.15rem',
        passionTemWord: '3.1125rem',
        passionTem: '4.35rem',
      },
    },
  },
  plugins: [],
};
