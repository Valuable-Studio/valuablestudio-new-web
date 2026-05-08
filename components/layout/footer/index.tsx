import AnalogClock from '@/components/ui/analog-clock'
import cn from 'clsx'
import s from './footer.module.css'

export default function Footer() {
  return (
    <footer className={cn(s.footer, 'text-caption')}>
      Booking projects for Q2 2026.
      <div className={s.clockWrapper}>
        {new Date().getFullYear()}
        <AnalogClock />
      </div>
    </footer>
  )
}
