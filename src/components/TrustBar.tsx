import { Reveal } from './ui/Reveal'

const isbLogo = `${import.meta.env.BASE_URL}assets/isb-logo.svg`
const gsfLogo = `${import.meta.env.BASE_URL}assets/gsf-logo.svg`

const partners = [
  {
    name: 'Indian School of Business',
    label: 'ISB',
    logo: isbLogo,
    className: 'h-9 sm:h-10 brightness-125 saturate-150',
  },
  {
    name: 'GSF India',
    label: 'GSF',
    logo: gsfLogo,
    className: 'h-8 sm:h-9 invert brightness-0',
  },
]

export function TrustBar() {
  return (
    <section className="relative z-10 border-y border-white/[0.05] bg-night/95">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-9">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <p className="label-mono text-pearl/42">Backed by</p>
              <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-pearl/55">
                Backed by ISB and GSF, with Error6o6 recognized among Anupam Mittal’s Dream Deal Top 10.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="group flex min-h-[92px] items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-crimson/35 hover:bg-crimson/[0.035]"
                >
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className={`${p.className} max-w-[150px] object-contain opacity-90 transition duration-300 group-hover:opacity-100`}
                    loading="lazy"
                  />
                </div>
              ))}

              <div className="group flex min-h-[92px] flex-col justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:border-crimson/35 hover:bg-crimson/[0.035]">
                <span className="font-display text-lg font-semibold tracking-[-0.02em] text-pearl/88">
                  Anupam Mittal
                </span>
                <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-crimson/72">
                  Dream Deal Top 10
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
