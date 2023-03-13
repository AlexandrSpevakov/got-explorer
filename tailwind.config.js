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
        '8.5/10': '85%',
      },
      opacity: {
        35: '.35',
        25: '.25',
        15: '.15',
        8: '.08',
      },
      outlineWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
