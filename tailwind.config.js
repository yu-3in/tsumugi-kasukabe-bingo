/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pop: {
          pink: 'var(--pop-pink)',
          orange: 'var(--pop-orange)',
          yellow: 'var(--pop-yellow)',
          blue: 'var(--pop-blue)',
          green: 'var(--pop-green)',
        }
      }
    }
  },
  variants: {
    extend: {

    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: []
};
