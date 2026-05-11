import RelicLogo from '@/components/ui/work-logos/relic'
import type { Work } from '@/lib/data/works/types'
import relic01 from './01 Website hero.webp'
import relic02 from './02 Product collection dashboard.webp'
import relic03 from './03 Product item detail view.webp'
import relic04 from './04 Product add item flow.webp'
import relic05 from './05 Product progress & rewards.webp'
import relic06 from './06 Product social feed.webp'
import relic07 from './07 Product settings.webp'

export const relic: Work = {
  name: 'Relic',
  logo: <RelicLogo />,
  description:
    'Collectors track their collections across spreadsheets, photos, and memory. Relic needed to make that feel like something worth showing off.',
  services: ['Web design', 'Product design'],
  industry: ['Lifestyle', 'Collector tech'],
  year: 2025,
  images: [
    {
      src: relic01,
      alt: 'Relic - Website hero section',
    },
    {
      src: relic02,
      alt: 'Relic - Product collection dashboard screen',
    },
    {
      src: relic03,
      alt: 'Relic - Product item detail view screen',
    },
    {
      src: relic04,
      alt: 'Relic - Product add item flow screen',
    },
    {
      src: relic05,
      alt: 'Relic - Product progress & rewards screen',
    },
    {
      src: relic06,
      alt: 'Relic - Product social feed screen',
    },
    {
      src: relic07,
      alt: 'Relic - Product settings screen',
    },
  ],
}
