import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const tags = ['Storytelling', 'Culture', 'AI Workflows', 'Kids & Family', 'Knowledge Systems']

export function FlagshipProduct() {
  return (
    <section
      id="flagship"
      className="relative overflow-hidden border-t border-white/[0.04] bg-charcoal/30 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-crimson/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Flagship Product"
          title={
            <>
              Starting with <span className="text-gradient-red">in.culcate.</span>
            </>
          }
          description="Our flagship product reimagines how stories, knowledge, and culture are created for the next generation."
        />

        <Reveal delay={1} className="mt-16">
          <div className="gradient-border overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left — product detail */}
              <div className="flex flex-col justify-between gap-10 p-8 sm:p-12">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 items-center rounded-lg border border-crimson/30 bg-crimson/[0.06] px-3 font-mono text-[11px] uppercase tracking-[0.2em] text-crimson">
                      Flagship Product
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-pearl sm:text-4xl">
                    in.culcate
                  </h3>

                  <p className="mt-4 max-w-md font-body text-base leading-relaxed text-pearl/60">
                    An AI-native storytelling and knowledge platform building
                    culturally rooted, cinematic content systems.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 font-body text-[13px] text-pearl/65 transition-colors duration-300 hover:border-crimson/40 hover:text-pearl"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#flagship"
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary-red px-6 py-3 text-sm font-medium text-pearl shadow-[0_8px_30px_-8px_rgba(231,29,36,0.6)] transition-all duration-300 hover:shadow-[0_12px_40px_-6px_rgba(231,29,36,0.85)]"
                >
                  Explore in.culcate
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Right — product window mockup */}
              <div className="relative border-t border-white/[0.06] bg-night/60 p-6 sm:p-8 lg:border-l lg:border-t-0">
                <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-night">
                  {/* window chrome */}
                  <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-crimson/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-pearl/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-pearl/15" />
                    <span className="ml-2 font-mono text-[11px] tracking-wide text-pearl/40">
                      in.culcate
                    </span>
                  </div>

                  {/* viewport */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="/assets/error6o6-globe-horizon.jpg"
                      alt="in.culcate cinematic content surface"
                      className="absolute inset-0 h-full w-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />

                    <div className="absolute left-5 top-5 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-crimson" />
                      <span className="label-mono text-pearl/70">
                        Story System // Live
                      </span>
                    </div>

                    <div className="absolute inset-x-5 bottom-5">
                      <p className="font-display text-lg font-semibold tracking-tight text-pearl">
                        Culturally rooted, cinematic by default.
                      </p>
                      <div className="mt-3 flex gap-2">
                        {['Narrative', 'Knowledge', 'Culture'].map((c) => (
                          <span
                            key={c}
                            className="rounded-md border border-white/10 bg-night/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-pearl/50 backdrop-blur"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-center font-mono text-[11px] tracking-wide text-pearl/30">
                  A frontier of Error6o6
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
