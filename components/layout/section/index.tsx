import cn from 'clsx'
import s from './section.module.css'

interface SectionProps {
  title: string
  children: React.ReactNode
  isIntro?: boolean
  slug?: string
}

export default function Section({
  title,
  children,
  isIntro = false,
  slug,
}: SectionProps) {
  return (
    <section id={slug ? slug : title.toLowerCase()} className={s.section}>
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
