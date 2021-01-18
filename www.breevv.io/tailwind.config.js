module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        width: 'width',
        size: 'height, width',
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ['focus', 'focus-within', 'hover', 'visited'],
      width: ['focus-within', 'focus', 'hover'],
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
