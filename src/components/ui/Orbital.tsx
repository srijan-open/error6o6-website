import { cn } from '../../lib/utils'

/** Animated concentric orbital rings with traveling signal nodes. Decorative. */
export function Orbital({ className }: { className?: string }) {
  return (
    <div
      className={cn('relative aspect-square w-full', className)}
      aria-hidden="true"
    >
      {/* core glow */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/30 blur-2xl animate-pulse-glow" />

      {/* rings */}
      <div className="absolute inset-[14%] rounded-full border border-crimson/25 animate-spin-slow">
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-crimson shadow-[0_0_12px_4px_rgba(231,29,36,0.7)]" />
      </div>
      <div className="absolute inset-[28%] rounded-full border border-crimson/20 animate-spin-reverse">
        <span className="absolute top-1/2 -right-1 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-crimson/90 shadow-[0_0_10px_3px_rgba(231,29,36,0.6)]" />
      </div>
      <div className="absolute inset-[42%] rounded-full border border-crimson/15 animate-spin-slow" />

      {/* core dot */}
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pearl shadow-[0_0_16px_6px_rgba(231,29,36,0.8)]" />

      {/* crosshair lines */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-crimson/15 to-transparent" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-crimson/15 to-transparent" />
    </div>
  )
}
