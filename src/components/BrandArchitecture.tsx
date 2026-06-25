import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Wordmark } from './ui/Logo'
import { cn } from '../lib/utils'

type Node = {
  name: string
  kind: string
  flagship?: boolean
  /** position on the constellation, % of container */
  pos: { top: string; left: string }
}

const nodes: Node[] = [
  { name: 'in.culcate', kind: 'Flagship Product', flagship: true, pos: { top: '16%', left: '78%' } },
  { name: "Error's Lab", kind: 'Future Product', pos: { top: '74%', left: '80%' } },
  { name: 'Capsoule', kind: 'Future Product', pos: { top: '82%', left: '30%' } },
  { name: 'Hi-fen', kind: 'Future Product', pos: { top: '24%', left: '20%' } },
]

function NodeCard({ node }: { node: Node }) {
  return (
    <div
      className={cn(
        'w-[180px] rounded-2xl border bg-night/82 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1',
        node.flagship
          ? 'border-crimson/45 shadow-[0_0_40px_-12px_rgba(231,29,36,0.6)]'
          : 'border-white/10 hover:border-crimson/35',
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            'h-2 w-2 rounded-full',
            node.flagship
              ? 'bg-crimson shadow-[0_0_10px_3px_rgba(231,29,36,0.7)]'
              : 'bg-pearl/30',
          )}
        />
        <span className="font-display text-base font-semibold tracking-tight text-pearl">
          {node.name}
        </span>
      </div>
      <span
        className={cn(
          'mt-2 block font-mono text-[10px] uppercase tracking-[0.18em]',
          node.flagship ? 'text-crimson/80' : 'text-pearl/35',
        )}
      >
        {node.kind}
      </span>
    </div>
  )
}

export function BrandArchitecture() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04] bg-charcoal/30 py-24 sm:py-32 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-oxblood/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="Brand Architecture"
          title={
            <>
              One company.{' '}
              <span className="text-gradient-red">Multiple frontiers.</span>
            </>
          }
          description="Error6o6 is the AI-native product lab at the center. Every product is a frontier orbiting the same idea."
        />

        {/* Constellation — desktop */}
        <Reveal delay={1} className="mt-20 hidden lg:block">
          <div className="relative mx-auto h-[560px] w-full max-w-4xl">
            {/* orbit rings */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-crimson/15" />
            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-crimson/10" />
            <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-crimson/[0.08]" />

            {/* connector lines */}
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              {nodes.map((n) => (
                <line
                  key={n.name}
                  x1="50%"
                  y1="50%"
                  x2={n.pos.left}
                  y2={n.pos.top}
                  stroke="rgba(231,29,36,0.22)"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />
              ))}
            </svg>

            {/* center — Error6o6 */}
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center gap-2 rounded-2xl border border-crimson/40 bg-night/90 px-8 py-6 text-center shadow-[0_0_60px_-10px_rgba(231,29,36,0.55)] backdrop-blur">
                <Wordmark className="text-2xl" />
                <span className="label-mono text-pearl/50">
                  AI-Native Product Lab
                </span>
              </div>
            </div>

            {/* satellites */}
            {nodes.map((n) => (
              <div
                key={n.name}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ top: n.pos.top, left: n.pos.left }}
              >
                <NodeCard node={n} />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stacked — tablet / mobile */}
        <Reveal delay={1} className="mt-14 lg:hidden">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-crimson/40 bg-night/90 px-8 py-6 text-center shadow-[0_0_50px_-12px_rgba(231,29,36,0.5)]">
              <Wordmark className="text-2xl" />
              <span className="label-mono text-pearl/50">AI-Native Product Lab</span>
            </div>

            <div className="h-8 w-px bg-gradient-to-b from-crimson/40 to-transparent" />

            <div className="grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-2">
              {nodes.map((n) => (
                <div key={n.name} className="flex justify-center">
                  <NodeCard node={n} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
