import { useState } from 'react'
import { Menu, X, Building2, Phone, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 text-slate-900 shadow-lg">
                <Building2 size={22} />
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold tracking-tight">Dubai Estates</div>
                <div className="text-xs text-slate-300/70">Luxury Real Estate</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#listings" className="hover:text-white transition-colors">Listings</a>
              <a href="#why" className="hover:text-white transition-colors">Why Dubai</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-200 hover:bg-emerald-400/20 transition-colors">
                <Phone size={16} />
                Book a call
              </a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="my-3 flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                <Search size={16} className="text-white/60" />
                <input placeholder="Search neighborhoods, towers..." className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none" />
              </div>
              <div className="grid gap-2 text-slate-200">
                <a href="#home" className="rounded-lg px-2 py-2 hover:bg-white/5">Home</a>
                <a href="#listings" className="rounded-lg px-2 py-2 hover:bg-white/5">Listings</a>
                <a href="#why" className="rounded-lg px-2 py-2 hover:bg-white/5">Why Dubai</a>
                <a href="#contact" className="rounded-lg px-2 py-2 hover:bg-white/5">Contact</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
