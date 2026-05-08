'use client'

import { Tooltip } from '@base-ui/react/tooltip'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import s from './analog-clock.module.css'

interface CetTime {
  hour: number
  minute: number
  second: number
  label: string
}

function readPart(
  parts: Intl.DateTimeFormatPart[],
  type: Intl.DateTimeFormatPartTypes
) {
  return Number.parseInt(parts.find((p) => p.type === type)?.value ?? '0', 10)
}

function getCetTime(now: Date): CetTime {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Rome',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    hour12: false,
  }).formatToParts(now)

  const hour24 = readPart(parts, 'hour')
  const minute = readPart(parts, 'minute')
  const second = readPart(parts, 'second')
  const tz = parts.find((p) => p.type === 'timeZoneName')?.value ?? 'CET'

  const hh = String(hour24).padStart(2, '0')
  const mm = String(minute).padStart(2, '0')
  const ss = String(second).padStart(2, '0')

  return {
    hour: hour24 % 12,
    minute,
    second,
    label: `${hh}:${mm}:${ss} ${tz}`,
  }
}

function TooltipArrowSvg() {
  return (
    <svg viewBox="0 0 14 7" aria-hidden="true">
      <path className={s.tooltipArrowFill} d="M0 0 L7 7 L14 0 Z" />
      <path className={s.tooltipArrowStroke} d="M0 0 L7 7 L14 0" />
    </svg>
  )
}

export default function AnalogClock() {
  const [time, setTime] = useState<CetTime | null>(null)

  useEffect(() => {
    const update = () => setTime(getCetTime(new Date()))
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const hourAngle = time
    ? (time.hour + time.minute / 60 + time.second / 3600) * 30
    : 0
  const minuteAngle = time ? (time.minute + time.second / 60) * 6 : 0
  const secondAngle = time ? time.second * 6 : 0

  const ariaLabel = time ? `Current time: ${time.label}` : 'Current time'

  return (
    <Tooltip.Provider delay={150}>
      <Tooltip.Root>
        <Tooltip.Trigger
          className={s.clock}
          type="button"
          aria-label={ariaLabel}
        >
          <svg className={s.face} viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10.5" className={s.frame} />
            <line
              x1="12"
              y1="12"
              x2="12"
              y2="3"
              className={s.secondHand}
              transform={`rotate(${secondAngle} 12 12)`}
            />
            <line
              x1="12"
              y1="12"
              x2="12"
              y2="7"
              className={s.hourHand}
              transform={`rotate(${hourAngle} 12 12)`}
            />
            <line
              x1="12"
              y1="12"
              x2="12"
              y2="4.5"
              className={s.minuteHand}
              transform={`rotate(${minuteAngle} 12 12)`}
            />
          </svg>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner
            side="top"
            sideOffset={12}
            className={s.positioner}
          >
            <Tooltip.Popup className={cn(s.tooltip, 'text-caption')}>
              {time?.label ?? '—'}
              <Tooltip.Arrow className={s.tooltipArrow}>
                <TooltipArrowSvg />
              </Tooltip.Arrow>
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
