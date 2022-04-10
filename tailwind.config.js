module.exports = {
  theme: {
    extend: {

      colors: {
        primary: '#2e3192',
        // VUT: #E4002B
        // MUNI: #0000dc
        // MENDELU: #79be15
        secondary: '#F90093',
      },
      transitionProperty: {
        'max-w': 'max-width'
      },
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
