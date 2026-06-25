import { BookOpen, Brain, Layers, Sparkles } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const areas = [
  {
    icon: BookOpen,
    title: 'Story Systems',
    body: 'Narrative engines, cultural IP, and AI-assisted creative production.',
  },
  {
    icon: Brain,
    title: 'Knowledge Products',
    body: 'Interfaces that make complex knowledge easier to explore, learn, and retain.',
  },
  {
    icon: Layers,
    title: 'Creative Infrastructure',
    body: 'Tools and workflows for AI-native media, storytelling, and production.',
  },
  {
    icon: Sparkles,
    title: 'Future Experiments',
    body: 'New products born from unresolved problems, strange insights, and frontier opportunities.',
  },
]

export function BuildAreas() {
  return (
    <section
      id="build-areas"
      className="relative overflow-hidden border-t border-white/[0.04] bg-night py-24 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 mask-radial" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Build Areas"
          title={
            <>
              We build where{' '}
              <span className="text-gradient-red">intelligence meets culture.</span>
            </>
          }
          description="Four frontiers, one trajectory — each a different way to build beyond the error."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i} className="h-full">
              <article className="glow-card group flex h-full min-h-[286px] flex-col p-7">
                <div className="lab-card-content">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-crimson/25 bg-crimson/[0.06] text-crimson transition-all duration-500 group-hover:border-crimson/50 group-hover:bg-crimson/15">
                  <a.icon className="h-5 w-5" />
                </span>

                <h3 className="mt-7 font-display text-xl font-semibold tracking-[-0.025em] text-pearl">
                  {a.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-pearl/58">
                  {a.body}
                </p>
                </div>

                <span className="lab-card-content mt-auto inline-block pt-8 font-mono text-[11px] tracking-[0.2em] text-pearl/25 transition-colors duration-500 group-hover:text-crimson/70">
                  0{i + 1} / 04
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
