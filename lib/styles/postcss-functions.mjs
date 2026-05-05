import { screens } from './layout.mjs'

function validate(px, device) {
  const n = Number.parseFloat(px)

  if (Number.isNaN(n)) {
    throw new Error(`Invalid pixel value: ${px}`)
  }
  if (screens[device].width === 0 || screens[device].height === 0) {
    throw new Error(`Screen ${device} dimensions cannot be zero`)
  }
  return n
}

export const functions = {
  'mobile-vw': (px) =>
    `${(validate(px, 'mobile') * 100) / screens.mobile.width}vw`,
  'mobile-vh': (px) => {
    const v = (validate(px, 'mobile') * 100) / screens.mobile.height
    return `clamp(${v}vh, ${v}svh, ${v}dvh)`
  },
  'desktop-vw': (px) =>
    `${(validate(px, 'desktop') * 100) / screens.desktop.width}vw`,
  'desktop-vh': (px) =>
    `${(validate(px, 'desktop') * 100) / screens.desktop.height}svh`,
}
