import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Wordmark } from './ui/Logo'
import { cn } from '../lib/utils'

const links = [
  { label: 'Vision', href: '#manifesto' },
  { label: 'Products', href: '#build-areas' },
  { label: 'in.culcate', href: '#flagship' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-crimson/20 bg-night/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Wordmark />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative font-body text-sm text-pearl/70 transition-colors duration-300 hover:text-pearl"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-crimson shadow-[0_0_8px_rgba(231,29,36,0.8)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#lab-model"
            className="hidden items-center gap-1.5 rounded-full border border-crimson/30 bg-crimson/[0.06] px-4 py-2 text-sm font-medium text-pearl transition-all duration-300 hover:border-crimson/70 hover:bg-crimson/15 hover:shadow-[0_0_24px_-4px_rgba(231,29,36,0.7)] sm:inline-flex"
          >
            Explore the Lab
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-pearl transition-colors hover:border-crimson/50 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-crimson/15 bg-night/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-body text-base text-pearl/80 transition-colors hover:bg-crimson/10 hover:text-pearl"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#lab-model"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary-red px-4 py-3 text-sm font-medium text-pearl"
              >
                Explore the Lab
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
