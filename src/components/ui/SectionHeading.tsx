import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from '../../lib/utils'

type Props = {
  label: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-crimson/60" />
          <span className="label-mono">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-pearl sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p
            className={cn(
              'max-w-2xl font-body text-base leading-relaxed text-pearl/60 sm:text-lg',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
