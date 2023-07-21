/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '1/15': '6.666666%',
        '1/10': '10%',
        '200': '200%',
        '240': '240%',
        '250': '250%',
        '300': '300%',
        '333': '333.333333%',
        '375': '375%',
        '400': '400%',
        '500': '500%',
        '1000': '1000%'
      }
    },
    screens: {
      'sm': '480px',
      // => @media (min-width: 480px) { ... }
      // year col 3->4
      'nm': '500px',
      // phim col 3->4
      'xnm': '540px',
      // padding vien 
      'md': '618px',
      // => @media (min-width: 540px) { ... }
      // slide bar 1->2

      'lg': '768px',
      // => @media (min-width: 618px) { ... }
      // body tach 2 phan
      'xlg': '880px',
      // star 
      'xl': '930px',
      // => @media (min-width: 768px) { ... }

      '2xl': '1090px',
      // => @media (min-width: 1130px) { ... }
      // hien thi search

      '3xl': '1200px'
      // body
      // => @media (min-width: 1224px) { ... }
      // col 5 phim 
    }
  },
  plugins: [],
}
