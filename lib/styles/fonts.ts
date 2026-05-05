import localFont from 'next/font/local'

const sans = localFont({
  src: [
    {
      path: '../../public/fonts/Saans/Saans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-sans',
  preload: true,
  adjustFontFallback: 'Arial',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji',
    'sans-serif',
  ],
})

const serif = localFont({
  src: [
    {
      path: '../../public/fonts/SerrifCondensed/SerrifCondensed-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-serif',
  preload: true,
  adjustFontFallback: 'Times New Roman',
  fallback: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
})

const fonts = [sans, serif]
const fontsVariable = fonts.map((font) => font.variable).join(' ')

export { fontsVariable }
