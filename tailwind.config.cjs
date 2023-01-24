/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'statista-blue-light': '#0b85e5',
        'statista-blue': '#0077d5',
        'statista-blue-dark': '#0f2741',
        'statista-blue-dark2': '#143356',
        'statista-blue-dark3': '#0069bc',
        'statista-grey-light': '#f5f8fb',
        'statista-grey': '#7b94a3',
        'statista-grey-dark': '#455F7C'
      },
      backgroundImage: {
        iconPremium:
          'url(https://cdn.statcdn.com/static/icons/products/product-icons.svg?uxh8k29#statisticPremium_icon)',
        iconBasic:
          'url(https://cdn.statcdn.com/static/icons/products/product-icons.svg?uxh8k29#statistic_icon)'
      },
      fontFamily: {
        'open-sans': ['Open Sans']
      }
    }
  },
  plugins: []
};
