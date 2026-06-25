import { Reveal } from './ui/Reveal'
import { Orbital } from './ui/Orbital'

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden border-t border-white/[0.04] bg-night py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-60 mask-radial" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-oxblood/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <div className="flex flex-col gap-7">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-crimson/60" />
              <span className="label-mono">Manifesto</span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight text-pearl sm:text-4xl lg:text-[2.75rem]">
              The future is built at the
              <span className="text-gradient-red"> edge of error.</span>
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p className="max-w-xl font-body text-lg leading-relaxed text-pearl/65">
              Every new category begins as a mistake, a contradiction, or a
              system that no longer works. Error6o6 exists to build beyond that
              edge — turning ambiguity into products, culture, and intelligence
              systems.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-2 flex flex-wrap gap-3">
              {['Uncertainty', 'Friction', 'Frontier problems'].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-crimson/20 bg-crimson/[0.04] px-4 py-1.5 font-mono text-xs tracking-wide text-pearl/55"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Abstract orbital / signal visual */}
        <Reveal delay={2} className="relative">
          <div className="gradient-border p-8 sm:p-12">
            <Orbital className="mx-auto max-w-md" />
            <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-6">
              <span className="label-mono text-pearl/40">Signal // 6o6</span>
              <span className="label-mono text-pearl/40">Edge of error</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
