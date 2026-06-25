import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { ParticleField } from './ui/ParticleField'

const globe = '/assets/error6o6-globe-horizon.jpg'

const floatingLabels = [
  { text: 'FRONTIER SYSTEMS', className: 'top-[18%] right-[8%]', delay: 0 },
  { text: 'CREATIVE INTELLIGENCE', className: 'top-[58%] right-[20%]', delay: 1.4 },
  { text: 'PRODUCT LAB', className: 'top-[40%] right-[44%]', delay: 2.6 },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [glow, setGlow] = useState({ x: 50, y: 40, on: false })

  const onMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      on: true,
    })
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, on: false }))}
      className="relative flex min-h-screen items-center overflow-hidden bg-night pt-16"
    >
      {/* Globe asset — right side / background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={globe}
          alt="Error6o6 digital globe on the red horizon"
          className="absolute right-0 top-0 h-full w-full object-cover object-right opacity-90 md:w-[72%] lg:w-[64%]"
        />
        {/* fade globe into background on the left + bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-transparent md:via-night/60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
      </div>

      {/* Drifting grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5] mask-fade-b animate-grid-drift" />

      {/* Particles */}
      <ParticleField className="pointer-events-none absolute inset-0 h-full w-full" />

      {/* Cursor-following crimson glow */}
      <div
        className="pointer-events-none absolute h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/20 blur-[120px] transition-opacity duration-500"
        style={{
          left: `${glow.x}%`,
          top: `${glow.y}%`,
          opacity: glow.on ? 1 : 0.35,
        }}
      />

      {/* Floating labels */}
      {floatingLabels.map((l) => (
        <motion.div
          key={l.text}
          className={`pointer-events-none absolute hidden items-center gap-2 lg:flex ${l.className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1 + l.delay * 0.2 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: l.delay },
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-crimson shadow-[0_0_10px_3px_rgba(231,29,36,0.7)]" />
          <span className="label-mono text-pearl/60">{l.text}</span>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-crimson/25 bg-crimson/[0.05] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-crimson" />
            <span className="label-mono text-pearl/70">AI-Native Product Lab</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-pearl sm:text-6xl lg:text-7xl"
          >
            Build beyond
            <br />
            the <span className="text-gradient-red">error.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl font-body text-lg leading-relaxed text-pearl/65"
          >
            Error6o6 builds frontier products that turn uncertainty into new
            systems, stories, and intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#lab-model">
              Explore the Lab
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button href="#flagship" variant="ghost">
              View in.culcate
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* bottom hairline */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
    </section>
  )
}
