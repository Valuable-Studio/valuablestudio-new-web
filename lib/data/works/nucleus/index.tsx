import NucleusLogo from '@/components/ui/work-logos/nucleus'
import type { Work } from '@/lib/data/works/types'
import nucleus01 from './01 Website hero.webp'
import nucleus02 from './02 Website features.webp'
import nucleus03 from './03 Website how it works.webp'
import nucleus04 from './04 Product home.webp'
import nucleus05 from './05 Product space view.webp'
import nucleus06 from './06 Product note editor.webp'
import nucleus07 from './07 Product search.webp'
import nucleus08 from './08 Product onboarding.webp'

export const nucleus: Work = {
  name: 'Nucleus',
  logo: <NucleusLogo />,
  description:
    'Teams already have the answer somewhere. Nucleus needed to make finding it feel effortless, not like another search task.',
  services: ['Web design', 'Product design'],
  industry: ['Productivity', 'AI SaaS'],
  year: 2025,
  images: [
    {
      src: nucleus01,
      alt: 'Nucleus - Website hero section',
    },
    {
      src: nucleus02,
      alt: 'Nucleus - Website features section',
    },
    {
      src: nucleus03,
      alt: 'Nucleus - Website how it works section',
    },
    {
      src: nucleus04,
      alt: 'Nucleus - Product home screen',
    },
    {
      src: nucleus05,
      alt: 'Nucleus - Product space view screen',
    },
    {
      src: nucleus06,
      alt: 'Nucleus - Product note editor screen',
    },
    {
      src: nucleus07,
      alt: 'Nucleus - Product search screen',
    },
    {
      src: nucleus08,
      alt: 'Nucleus - Product onboarding screen',
    },
  ],
}
