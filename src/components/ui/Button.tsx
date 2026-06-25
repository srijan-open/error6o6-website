import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'ghost'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  children: ReactNode
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-medium text-sm tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson/60 focus-visible:ring-offset-2 focus-visible:ring-offset-night',
        variant === 'primary' &&
          'bg-primary-red text-pearl shadow-[0_8px_30px_-8px_rgba(231,29,36,0.6)] hover:shadow-[0_12px_40px_-6px_rgba(231,29,36,0.8)]',
        variant === 'ghost' &&
          'border border-white/15 bg-white/[0.02] text-pearl/90 hover:border-crimson/50 hover:bg-crimson/[0.06] hover:text-pearl',
        className,
      )}
      {...props}
    >
      {/* Sheen sweep on primary hover */}
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  )
}
