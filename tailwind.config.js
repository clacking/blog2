module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js','./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: [
            {
              color: theme('colors.gray.300'),
              h1: { color: theme('colors.gray.300') },
              h2: { color: theme('colors.gray.300') },
              h3: { color: theme('colors.gray.300') },
              h4: { color: theme('colors.gray.300') },
              h5: { color: theme('colors.gray.300') },
              a: { color: theme('colors.purple.400') },
              pre: {
                color: theme('colors.gray.200'), background: theme('colors.purple.900')
              },
              code: { color: theme('colors.red.300') },
            }
          ]
        }
      }),
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
