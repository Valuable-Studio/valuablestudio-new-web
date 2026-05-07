'use client'

import { Popover } from '@base-ui/react/popover'
import { Tooltip } from '@base-ui/react/tooltip'
import cn from 'clsx'
import { useEffect, useState } from 'react'
import s from './email-link.module.css'

interface EmailLinkProps {
  children: React.ReactNode
  email?: string
}

function PopoverArrowSvg() {
  return (
    <svg viewBox="0 0 14 7" aria-hidden="true">
      <path className={s.popoverArrowFill} d="M0 0 L7 7 L14 0 Z" />
      <path className={s.popoverArrowStroke} d="M0 0 L7 7 L14 0" />
    </svg>
  )
}

function TooltipArrowSvg() {
  return (
    <svg viewBox="0 0 14 7" aria-hidden="true">
      <path className={s.tooltipArrowFill} d="M0 0 L7 7 L14 0 Z" />
      <path className={s.tooltipArrowStroke} d="M0 0 L7 7 L14 0 0" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H7V13H3.5C3.22386 13 3 12.7761 3 12.5V2.5C3 2.22386 3.22386 2 3.5 2H4V2.25C4 2.66421 4.33579 3 4.75 3H10.25C10.6642 3 11 2.66421 11 2.25V2H11.5C11.7761 2 12 2.22386 12 2.5V7H13V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM9 8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5ZM10.5 9C10.7761 9 11 8.77614 11 8.5C11 8.22386 10.7761 8 10.5 8C10.2239 8 10 8.22386 10 8.5C10 8.77614 10.2239 9 10.5 9ZM13 8.5C13 8.77614 12.7761 9 12.5 9C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8C12.7761 8 13 8.22386 13 8.5ZM14.5 9C14.7761 9 15 8.77614 15 8.5C15 8.22386 14.7761 8 14.5 8C14.2239 8 14 8.22386 14 8.5C14 8.77614 14.2239 9 14.5 9ZM15 10.5C15 10.7761 14.7761 11 14.5 11C14.2239 11 14 10.7761 14 10.5C14 10.2239 14.2239 10 14.5 10C14.7761 10 15 10.2239 15 10.5ZM14.5 13C14.7761 13 15 12.7761 15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5C14 12.7761 14.2239 13 14.5 13ZM14.5 15C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5C14 14.7761 14.2239 15 14.5 15ZM8.5 11C8.77614 11 9 10.7761 9 10.5C9 10.2239 8.77614 10 8.5 10C8.22386 10 8 10.2239 8 10.5C8 10.7761 8.22386 11 8.5 11ZM9 12.5C9 12.7761 8.77614 13 8.5 13C8.22386 13 8 12.7761 8 12.5C8 12.2239 8.22386 12 8.5 12C8.77614 12 9 12.2239 9 12.5ZM8.5 15C8.77614 15 9 14.7761 9 14.5C9 14.2239 8.77614 14 8.5 14C8.22386 14 8 14.2239 8 14.5C8 14.7761 8.22386 15 8.5 15ZM11 14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5C10 14.2239 10.2239 14 10.5 14C10.7761 14 11 14.2239 11 14.5ZM12.5 15C12.7761 15 13 14.7761 13 14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function EmailLink({
  children,
  email = 'giaco@valuable.studio',
}: EmailLinkProps) {
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!success) return

    const timeout = setTimeout(() => setSuccess(false), 1000)

    return () => clearTimeout(timeout)
  }, [success])

  function handleCopy() {
    if (!navigator.clipboard) return
    navigator.clipboard.writeText(email).then(() => setSuccess(true))
  }

  return (
    <Popover.Root>
      <Popover.Trigger className={s.trigger}>
        <span className={s.label}>{children}</span>
        <MailIcon className={s.triggerIcon} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner side="top" sideOffset={6} className={s.positioner}>
          <Popover.Popup className={s.popup} initialFocus={false}>
            <Tooltip.Provider delay={300}>
              <div className={s.bar}>
                <Tooltip.Root>
                  <Tooltip.Trigger
                    className={cn(s.action, s.actionStart)}
                    onClick={handleCopy}
                    aria-label="Copy email to clipboard"
                  >
                    <span className={s.iconStack}>
                      <span
                        className={s.iconLayer}
                        data-active={!success}
                        aria-hidden={success}
                      >
                        <CopyIcon className={s.actionIcon} />
                      </span>
                      <span
                        className={s.iconLayer}
                        data-active={success}
                        aria-hidden={!success}
                      >
                        <CheckIcon className={s.actionIcon} />
                      </span>
                    </span>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Positioner
                      side="top"
                      sideOffset={12}
                      className={s.tooltipPositioner}
                    >
                      <Tooltip.Popup className={cn(s.tooltip, 'text-caption')}>
                        Copy to clipboard
                        <Tooltip.Arrow className={s.tooltipArrow}>
                          <TooltipArrowSvg />
                        </Tooltip.Arrow>
                      </Tooltip.Popup>
                    </Tooltip.Positioner>
                  </Tooltip.Portal>
                </Tooltip.Root>

                <span className={cn(s.email, 'text-caption')}>{email}</span>

                <Tooltip.Root>
                  <Tooltip.Trigger
                    render={
                      <a href={`mailto:${email}`} aria-label="Send an email">
                        <SendIcon className={s.actionIcon} />
                      </a>
                    }
                    className={cn(s.action, s.actionEnd)}
                  />
                  <Tooltip.Portal>
                    <Tooltip.Positioner
                      side="top"
                      sideOffset={12}
                      className={s.tooltipPositioner}
                    >
                      <Tooltip.Popup className={cn(s.tooltip, 'text-caption')}>
                        Send an email
                        <Tooltip.Arrow className={s.tooltipArrow}>
                          <TooltipArrowSvg />
                        </Tooltip.Arrow>
                      </Tooltip.Popup>
                    </Tooltip.Positioner>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </div>
            </Tooltip.Provider>
            <Popover.Arrow className={s.popoverArrow}>
              <PopoverArrowSvg />
            </Popover.Arrow>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}
