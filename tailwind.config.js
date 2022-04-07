const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#2e3192',
        secondary: '#F90093',
        // secondary: '#F90093',
      }
    }
  },
  variants: {
    extend: {
      bgColor: ['group-even', 'group-odd']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-group-even-odd'),
  ]
}
