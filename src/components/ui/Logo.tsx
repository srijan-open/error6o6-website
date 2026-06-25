import { cn } from '../../lib/utils'

const logoSrc = `${import.meta.env.BASE_URL}assets/error6o6-logo.jpg`

/** Actual Error6o6 logo supplied by the founder: /error/606 red-black badge. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Error6o6 logo"
      className={cn(
        'h-12 w-auto rounded-xl object-contain shadow-[0_0_24px_-10px_rgba(231,29,36,0.95)] ring-1 ring-crimson/18',
        className,
      )}
    />
  )
}

export function Wordmark({ className }: { className?: string }) {
  return <BrandLogo className={cn('h-10 sm:h-11', className)} />
}

export function StampMark({ className }: { className?: string }) {
  return <BrandLogo className={cn('h-14', className)} />
}
