import cn from 'clsx'
import type { HTMLAttributes } from 'react'
import s from './logo.module.css'

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn(s.wrapper, className)} {...props}>
      <div data-ball />
      <div data-blur />
    </div>
  )
}
