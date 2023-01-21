/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'statista-dark': '#0f2741',
        'statista-dark2': '#7b94a3',
        statista: '#0077d5',
        'statista-gradient-start': '#143356',
        'statista-icon-bg': '#455F7C'
      }
    }
  },
  plugins: []
};
