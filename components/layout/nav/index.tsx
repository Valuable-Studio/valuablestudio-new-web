'use client'

import Logo from '@/components/ui/logo'
import cn from 'clsx'
import Link from 'next/link'
import { type MouseEvent, useEffect, useState } from 'react'
import s from './nav.module.css'

const SCROLL_OFFSET_RATIO = 0.15

interface Section {
  id: string
  label: string
}

const SECTIONS: Section[] = [
  { id: 'problem', label: 'Problem' },
  { id: 'work', label: 'Work' },
  { id: 'offer', label: 'Offer' },
  { id: 'fit', label: 'Fit check' },
  { id: 'contact', label: 'Contact' },
] as const

export default function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0)
      return

    const target = document.getElementById(id)
    if (!target) return

    event.preventDefault()
    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      window.innerHeight * SCROLL_OFFSET_RATIO
    window.scrollTo({ top, behavior: 'smooth' })
    window.history.pushState(null, '', `/#${id}`)
  }

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const visible = new Set<string>()

    const pickActive = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (atBottom) {
        const last = SECTIONS.at(-1)
        if (last) setActiveId(last.id)
        return
      }

      for (const { id } of SECTIONS) {
        if (visible.has(id)) {
          setActiveId(id)
          return
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        pickActive()
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    for (const el of elements) observer.observe(el)
    window.addEventListener('scroll', pickActive, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', pickActive)
    }
  }, [])

  return (
    <nav className={s.nav}>
      <Link href="/" aria-label="Valuable Studio">
        <Logo />
      </Link>

      <ul className={cn(s.list, 'desktop-only')}>
        {SECTIONS.map((section) => {
          const isActive = section.id === activeId
          return (
            <li key={section.id} className="text-caption">
              <Link
                href={`/#${section.id}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={(event) => handleSectionClick(event, section.id)}
              >
                {section.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
