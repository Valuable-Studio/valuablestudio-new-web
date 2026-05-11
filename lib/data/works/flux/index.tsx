import FluxLogo from '@/components/ui/work-logos/flux'
import type { Work } from '@/lib/data/works/types'
import flux01 from './01 Website how it works.webp'
import flux02 from './02 Website testimonials.webp'
import flux03 from './03 Website pricing comparison.webp'

export const flux: Work = {
  name: 'Flux',
  logo: <FluxLogo />,
  description:
    'Most dev teams discover bugs after shipping. Flux needed to feel like infrastructure, not just another testing tool.',
  services: ['Web design'],
  industry: ['Devtool', 'AI SaaS'],
  year: 2026,
  images: [
    {
      src: flux01,
      alt: 'Flux - Website how it works section',
    },
    {
      src: flux02,
      alt: 'Flux - Website testimonials section',
    },
    {
      src: flux03,
      alt: 'Flux - Pricing comparison section',
    },
  ],
}
