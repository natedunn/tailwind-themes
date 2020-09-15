const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        // Grays
        mag: '#b3b2b5',
        silver: '#dedddd',
        lily: '#ebebeb',
        mercury: '#e5e5e5',
        alabaster: '#fcfcfc',
        notwhite: '#ececec',
        // Blues
        alto: '#bbb',
        foam: '#dcffff',
        jordy: '#4ea4f3',
        'foam-dark': '#b7d5eb',
        'jordy-dark': '#4ea4f3',
      },
      boxShadow: {
        'inner-md': 'inset 0px 5px 5px -1px rgb(0 0 0 / 25%)',
        'inner-input': 'inset 0px 1px 2px 0px rgb(0 0 0 / 22.5%)',
      },
      strokeWidth: {
        3: '3',
        4: '4',
      },
    },
    fontFamily: {
      sans: [
        'Lucida Grande',
        'Lucida Sans Unicode',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
    gradientColorStops: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/ui')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    whitelist: [
      'pre',
      'code',
      'prism',
      'line-numbers',
      'tag',
      'toolbar-item',
      'toolbar',
      'code-toolbar',
      'span',
      'button',
      'line-numbers-rows',
      'url-link',
      'attr-name',
      'attr-value',
      'punctuation',
      'keyword',
      'keyword-let',
      'operator',
      'string',
    ],
  },
  experimental: {
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
    uniformColorPalette: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
