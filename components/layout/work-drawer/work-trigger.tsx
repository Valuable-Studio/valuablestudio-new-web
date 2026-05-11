'use client'

import type { ComponentProps } from 'react'
import type { Work } from '@/lib/data/works'
import { useWorkDrawer } from '.'

interface WorkTriggerProps extends ComponentProps<'button'> {
  work: Work
}

export default function WorkTrigger({
  work,
  children,
  onClick,
  ...props
}: WorkTriggerProps) {
  const { open } = useWorkDrawer()

  return (
    <button
      type="button"
      aria-label={`Open ${work.name} case study`}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) open(work)
      }}
      {...props}
    >
      {children}
    </button>
  )
}
