import { StampMark } from './ui/Logo'

const links = [
  { label: 'Vision', href: '#manifesto' },
  { label: 'Products', href: '#build-areas' },
  { label: 'in.culcate', href: '#flagship' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#footer' },
]

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative border-t border-crimson/15 bg-night"
    >
      <div className="hairline" />
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="flex max-w-sm flex-col gap-5">
            <div className="flex items-center gap-3">
              <StampMark className="h-12" />
              <span className="font-display text-2xl font-bold tracking-tight text-pearl">
                Error<span className="text-crimson">6o6</span>
              </span>
            </div>
            <p className="font-display text-lg tracking-tight text-pearl/80">
              Build beyond the <span className="text-gradient-red">error.</span>
            </p>
            <a
              href="https://error6o6.com"
              className="w-fit font-mono text-sm tracking-wide text-pearl/50 transition-colors hover:text-crimson"
            >
              error6o6.com
            </a>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-4">
            <span className="label-mono text-pearl/40">Navigate</span>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 sm:flex sm:flex-col sm:gap-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 font-body text-sm text-pearl/65 transition-colors hover:text-pearl"
                  >
                    <span className="h-px w-0 bg-crimson transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center">
          <span className="font-mono text-xs tracking-wide text-pearl/35">
            error6o6.com
          </span>
          <span className="label-mono text-pearl/30">One company. Multiple frontiers.</span>
        </div>
      </div>
    </footer>
  )
}
