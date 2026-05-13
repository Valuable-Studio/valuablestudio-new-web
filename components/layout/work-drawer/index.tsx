'use client'

import { WORKS, type Work } from '@/lib/data/works'
import { Drawer } from '@base-ui/react/drawer'
import cn from 'clsx'
import Image from 'next/image'
import {
  type CSSProperties,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import s from './work-drawer.module.css'

const FIRST_WORK = WORKS[0]
if (!FIRST_WORK) {
  throw new Error('WORKS must contain at least one entry')
}

interface WorkDrawerContextValue {
  open: (work: Work) => void
}

const WorkDrawerContext = createContext<WorkDrawerContextValue | null>(null)

export function useWorkDrawer() {
  const ctx = useContext(WorkDrawerContext)
  if (!ctx) {
    throw new Error('useWorkDrawer must be used within <WorkDrawerProvider>')
  }
  return ctx
}

interface WorkDrawerProviderProps {
  children: React.ReactNode
}

export default function WorkDrawerProvider({
  children,
}: WorkDrawerProviderProps) {
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(
    null
  )
  const [activeWork, setActiveWork] = useState<Work>(FIRST_WORK)
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback((work: Work) => {
    setActiveWork(work)
    setIsOpen(true)
  }, [])

  return (
    <Drawer.Provider>
      <div className={s.root} ref={setPortalContainer}>
        <Drawer.IndentBackground className={s.indentBackground} />
        <Drawer.Indent className={s.indent}>
          <WorkDrawerContext.Provider value={{ open }}>
            {children}
          </WorkDrawerContext.Provider>
        </Drawer.Indent>

        <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
          <Drawer.Portal container={portalContainer}>
            <Drawer.Backdrop className={s.backdrop} />
            <Drawer.Viewport className={s.viewport}>
              <Drawer.Popup className={s.popup}>
                <div className={s.handle}>
                  <div className={s.thumb} />
                </div>
                <Drawer.Content className="layout-grid">
                  <Drawer.Close
                    className={cn(s.close, 'desktop-only text-caption')}
                    aria-label="Close"
                  >
                    <svg
                      className={s.icon}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <g>
                        <path
                          d="M3.66667 10.3334V3.66675H10.3333"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4 4L12 12"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                    Close
                  </Drawer.Close>
                  <WorkDetails work={activeWork} />
                </Drawer.Content>
              </Drawer.Popup>
            </Drawer.Viewport>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </Drawer.Provider>
  )
}

function WorkDetails({ work }: { work: Work }) {
  return (
    <>
      <div className={s.detailsWrapper}>
        <div className={s.info}>
          <Drawer.Title className="text-h2">{work.name}</Drawer.Title>

          <div className={cn(s.bodyContainer, 'text-body')}>
            <Drawer.Description>{work.description}</Drawer.Description>

            <div className={s.grid}>
              <div className={s.meta}>
                <p>
                  <em>Services</em>
                </p>
                <ul className={s.list}>
                  {work.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
              <div className={s.meta}>
                <p>
                  <em>Industry</em>
                </p>
                <ul className={s.list}>
                  {work.industry.map((industry) => (
                    <li key={industry}>{industry}</li>
                  ))}
                </ul>
              </div>
              <div className={s.meta}>
                <p>
                  <em>Year</em>
                </p>
                <p>{work.year}</p>
              </div>
            </div>
            {work.website ? (
              <a
                href={work.website}
                target="_blank"
                rel="noreferrer"
                className={s.link}
              >
                <span className={s.linkLabel}>View live site</span>
                <svg
                  className={s.icon}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <g opacity="0.4">
                    <path
                      d="M5.66667 3.66675H12.3333V10.3334M12.3333 3.66675L4 12.0001"
                      stroke="#101400"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {work.images.map((image) => (
        <div key={image.alt} className={s.imageWrapper}>
          <div className={s.imageContainer}>
            <div
              className={s.imageFrame}
              style={
                {
                  '--image-ar': image.src.width / image.src.height,
                } as CSSProperties
              }
            >
              <Image
                className={s.image}
                src={image.src}
                alt={image.alt}
                sizes="(min-width: 800px) 60vw, 90vw"
                placeholder="blur"
                draggable={false}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          {image.caption ? (
            <div className={s.caption}>
              <span className="text-caption">{image.caption}</span>
            </div>
          ) : null}
        </div>
      ))}
    </>
  )
}
