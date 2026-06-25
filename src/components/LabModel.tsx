import { FlaskConical, Boxes, Orbit } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const stages = [
  {
    n: '01',
    icon: FlaskConical,
    title: 'Research',
    body: 'We explore deep cultural, technological, and behavioral shifts before they become obvious.',
  },
  {
    n: '02',
    icon: Boxes,
    title: 'Build',
    body: 'We turn frontier theses into focused products with strong design, AI-native workflows, and real distribution.',
  },
  {
    n: '03',
    icon: Orbit,
    title: 'Scale',
    body: 'We compound learning across products, audiences, systems, and creative loops.',
  },
]

export function LabModel() {
  return (
    <section
      id="lab-model"
      className="relative overflow-hidden border-t border-white/[0.04] bg-night py-24 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(231,29,36,0.11),transparent_38%)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="The Lab Model"
          title="A lab for frontier products."
          description="One operating system for building beyond the error — from first signal to independent product."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {stages.map((s, i) => (
            <Reveal key={s.title} delay={i} className="h-full">
              <article className="glow-card group flex h-full min-h-[292px] flex-col p-7 sm:p-8">
                <div className="lab-card-content flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-crimson/25 bg-crimson/[0.06] text-crimson transition-colors duration-500 group-hover:bg-crimson/15">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm text-pearl/25">{s.n}</span>
                </div>

                <h3 className="lab-card-content mt-7 font-display text-2xl font-semibold tracking-[-0.03em] text-pearl">
                  {s.title}
                </h3>
                <p className="lab-card-content mt-4 font-body text-[15px] leading-relaxed text-pearl/58">
                  {s.body}
                </p>

                <div className="lab-card-content mt-auto pt-8">
                  <div className="hairline opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
