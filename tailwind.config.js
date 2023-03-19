/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['var(--font-cardo)'],
        mono: ['var(--font-karla)'],
        tulpen: ['var(--font-tulpen)'],
      },
      fontSize: {
        '7.5xl': ['5.25rem', { lineHeight: '6rem' }],
        '8.5xl': '7rem',
      },
      spacing: {
        '8.5/10': '85%',
      },
      opacity: {
        15: '.15',
        7: '.07',
      },
      outlineWidth: {
        3: '3px',
      },
      gridTemplateColumns: {
        card: '30% 70%',
      },
      screens: {
        sm: '576px',
      },
    },
  },
  plugins: [],
};
