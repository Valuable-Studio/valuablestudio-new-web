import Logo from '@/components/ui/logo'
import cn from 'clsx'
import Link from 'next/link'
import s from './nav.module.css'

interface Section {
  href: string
  label: string
}

const SECTIONS: Section[] = [
  { href: '/#problem', label: 'Problem' },
  { href: '/#work', label: 'Work' },
  { href: '/#offer', label: 'Offer' },
  { href: '/#fit', label: 'Fit check' },
  { href: '/#contact', label: 'Contact' },
] as const

// TODO: Track current visible section and highlight related nav link

export default function Nav() {
  return (
    <nav className={s.nav}>
      <Link href="/" aria-label="Valuable Studio">
        <Logo />
      </Link>

      <ul className={cn(s.list, 'desktop-only')}>
        {SECTIONS.map((section) => (
          <li key={section.label} className="text-caption">
            <Link href={section.href}>{section.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
