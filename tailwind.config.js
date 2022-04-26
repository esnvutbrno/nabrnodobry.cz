module.exports = {
  darkMode: 'class',
  theme: {
    extend: {

      colors: {
        primary: 'rgb(var(--color-primary))',
        secondary: '#f90093',
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
