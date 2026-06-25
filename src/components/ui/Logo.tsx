import { cn } from '../../lib/utils'

/** Error6o6 wordmark — "Error" in soft white, "6o6" in crimson (per brandboard). */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'select-none font-display text-xl font-bold tracking-tight text-pearl',
        className,
      )}
    >
      Error<span className="text-crimson">6o6</span>
    </span>
  )
}

/** The /error/606 stamp badge — distilled SVG interpretation of the brand mark. */
export function StampMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 100"
      className={cn('h-10 w-auto', className)}
      role="img"
      aria-label="Error6o6"
      fill="none"
    >
      {/* notch posts */}
      <rect x="26" y="2" width="6" height="12" rx="2" fill="#E71D24" />
      <rect x="64" y="2" width="6" height="12" rx="2" fill="#E71D24" />
      {/* outer red frame */}
      <rect
        x="4"
        y="10"
        width="88"
        height="84"
        rx="16"
        stroke="#E71D24"
        strokeWidth="5"
        fill="#0A0A0C"
      />
      {/* /error/ tab */}
      <rect x="18" y="26" width="60" height="20" rx="6" fill="#E71D24" />
      <text
        x="48"
        y="40"
        textAnchor="middle"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="12"
        fontStyle="italic"
        fontWeight="600"
        fill="#0A0A0C"
      >
        /error/
      </text>
      {/* 606 */}
      <text
        x="48"
        y="80"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="30"
        fontWeight="700"
        fill="#F5F5F7"
      >
        606
      </text>
    </svg>
  )
}
