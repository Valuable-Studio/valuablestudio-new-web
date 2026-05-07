import cn from 'clsx'
import s from './section.module.css'

interface SectionProps {
  title: string
  isIntro?: boolean
  children: React.ReactNode
}

export default function Section({
  title,
  isIntro = false,
  children,
}: SectionProps) {
  return (
    <section id={title.toLowerCase()} className={s.section}>
      {!isIntro ? (
        <div className={s.titleContainer}>
          <span className="text-caption">{title}</span>
          <hr className={s.divider} />
        </div>
      ) : null}
      <div className={cn(s.bodyContainer, 'text-body')}>{children}</div>
    </section>
  )
}
