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
      spacing: {
        18: '4.5rem',
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
    },
  },
  plugins: [],
};
