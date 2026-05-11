import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

/**
 * A work image. `src` is a static import of a `.webp` from the work's own
 * folder (e.g. `import flux01 from './01.webp'`) — Next.js then derives the
 * dimensions and blur placeholder at build time, so no manual width/height.
 */
export interface WorkImage {
  src: StaticImageData
  alt: string
  caption?: string
}

export interface Work {
  name: string
  logo: ReactNode
  description: string
  services: ('Web design' | 'Product design')[]
  industry: string[]
  year: number
  images: WorkImage[]
  website?: string
}
