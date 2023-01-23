/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'statista-dark': '#0f2741',
        'statista-dark2': '#7b94a3',
        'statista-dark3': '#0069bc',
        statista: '#0077d5',
        'statista-gradient-start': '#143356',
        'statista-grey': '#455F7C',
        'statista-light-grey': '#f5f8fb'
      },
      backgroundImage: {
        iconPremium:
          'url(https://cdn.statcdn.com/static/icons/products/product-icons.svg?uxh8k29#statisticPremium_icon)',
        iconBasic:
          'url(https://cdn.statcdn.com/static/icons/products/product-icons.svg?uxh8k29#statistic_icon)'
      }
    }
  },
  plugins: []
};
