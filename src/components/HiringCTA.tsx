import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './ui/Reveal'

export function HiringCTA() {
  return (
    <section
      id="careers"
      className="relative overflow-hidden border-t border-white/[0.04] bg-night py-24 sm:py-32"
    >
      {/* horizon glow echoing the hero globe */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-crimson/[0.10] to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-full h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-crimson/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-40 mask-radial" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-crimson/25 bg-crimson/[0.05] px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-crimson" />
            <span className="label-mono text-pearl/70">Open Frontier</span>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="mt-7 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-pearl sm:text-5xl">
            We are looking for{' '}
            <span className="text-gradient-red">unreasonable builders.</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-pearl/65">
            If you think in systems, obsess over culture, and want to build
            products that feel like they arrived early from the future — we
            should talk.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <a
            href="#footer"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary-red px-7 py-3.5 text-sm font-medium text-pearl shadow-[0_10px_40px_-10px_rgba(231,29,36,0.7)] transition-all duration-300 hover:shadow-[0_14px_50px_-8px_rgba(231,29,36,0.9)]"
          >
            Contact Error6o6
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
