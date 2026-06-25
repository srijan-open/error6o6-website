import { Reveal } from './ui/Reveal'

const orbitalFrontier = `${import.meta.env.BASE_URL}assets/error6o6-orbital-frontier.png`

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative overflow-hidden border-t border-white/[0.04] bg-night py-24 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-45 mask-radial" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-oxblood/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-crimson/[0.07] blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
        <div className="flex flex-col gap-7">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-crimson/65" />
              <span className="label-mono">Manifesto</span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="max-w-[34rem] font-display text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-pearl sm:text-4xl lg:text-[3.15rem]">
              The future is built at the
              <span className="text-gradient-red"> edge of error.</span>
            </h2>
          </Reveal>

          <Reveal delay={2}>
            <p className="max-w-xl font-body text-lg leading-relaxed text-pearl/66">
              Every new category begins as a mistake, a contradiction, or a
              system that no longer works. Error6o6 exists to build beyond that
              edge — turning ambiguity into products, culture, and intelligence
              systems.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-3 grid max-w-lg gap-2.5 sm:grid-cols-3">
              {['Uncertainty', 'Friction', 'Frontier problems'].map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-crimson/18 bg-night/45 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.17em] text-pearl/52 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={2} className="relative">
          <div className="group relative overflow-hidden rounded-[2rem] border border-crimson/20 bg-charcoal/30 p-2 shadow-[0_40px_120px_-50px_rgba(231,29,36,0.9)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_55%,rgba(231,29,36,0.22),transparent_42%)] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
            <img
              src={orbitalFrontier}
              alt="Abstract crimson orbital frontier signal visual"
              className="relative aspect-[16/10] w-full rounded-[1.55rem] object-cover opacity-90 saturate-125 transition duration-700 group-hover:scale-[1.015] group-hover:opacity-100"
            />
            <div className="pointer-events-none absolute inset-2 rounded-[1.55rem] bg-gradient-to-t from-night/55 via-transparent to-night/20" />
            <div className="absolute inset-x-6 bottom-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
              <span className="label-mono text-pearl/48">Signal // 6o6</span>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-crimson/70 sm:inline">
                Frontier visual system
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
