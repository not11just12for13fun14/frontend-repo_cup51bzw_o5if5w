import { Suspense, useMemo } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const splineUrl = 'https://prod.spline.design/6P8c1a5r1qkM8lEX/scene.splinecode'

  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#0b1220_40%,#0b1729_100%)]" />

      <div className="absolute inset-0 -z-10 opacity-[0.15]">
        <div className="absolute -top-20 -left-20 h-[600px] w-[600px] rounded-full bg-emerald-400 blur-[120px]" />
        <div className="absolute top-40 -right-32 h-[500px] w-[500px] rounded-full bg-cyan-400 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            Ultra-luxury residences • Waterfront • Palm Views
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Live the High Life in Dubai
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Discover a curated portfolio of iconic towers and beachfront villas across Palm Jumeirah, Dubai Marina, Downtown and more — presented in an immersive 3D experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#listings" className="rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20">
              Explore Listings
            </a>
            <a href="#contact" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10">
              Book a Private Tour
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-white/80">
            <div>
              <div className="text-2xl font-bold text-white">$2.1M+</div>
              <div className="text-xs text-white/60">Avg. Luxury Property</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">120+</div>
              <div className="text-xs text-white/60">Exclusive Listings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">15 min</div>
              <div className="text-xs text-white/60">Average Response</div>
            </div>
          </div>
        </div>

        <div className="relative h-[520px] md:h-[680px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
            <Suspense fallback={<div className='w-full h-full flex items-center justify-center text-white/60'>Loading 3D...</div>}>
              <Spline scene={splineUrl} />
            </Suspense>
          </div>
          <div className="absolute -bottom-6 -left-6 -right-6 h-12 rounded-3xl bg-black/30 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
