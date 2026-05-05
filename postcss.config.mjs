import { functions } from './lib/styles/postcss-functions.mjs'

export default {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./lib/styles/css/global.css'],
    },
    'postcss-functions': { functions },
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: { flexbox: 'no-2009' },
      features: {
        'custom-properties': false,
        'custom-media-queries': true,
        'nesting-rules': true,
      },
    },
  },
}
