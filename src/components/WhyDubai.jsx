import { Building, ShieldCheck, Sun, Plane, Landmark, DollarSign } from 'lucide-react'

export default function WhyDubai() {
  const features = [
    { icon: <Landmark />, title: 'Tax-friendly economy', desc: '0% income tax, business-friendly policies and strong currency stability.' },
    { icon: <ShieldCheck />, title: 'Safe & secure', desc: 'Consistently ranked among the world’s safest cities.' },
    { icon: <Plane />, title: 'Global connectivity', desc: 'World-class airports with direct flights to 200+ destinations.' },
    { icon: <Sun />, title: 'Year-round sunshine', desc: 'Over 300 days of sunshine and pristine beaches.' },
    { icon: <Building />, title: 'Iconic architecture', desc: 'From the Palm to the Burj Khalifa — true modern marvels.' },
    { icon: <DollarSign />, title: 'Strong ROI', desc: 'High rental yields and accelerating capital appreciation.' },
  ]

  return (
    <section id="why" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#0d1b2a_20%,#0e2238_100%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Why invest in Dubai</h2>
          <p className="mt-2 text-slate-300">A future-ready city with unmatched lifestyle and opportunity.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 text-slate-900 shadow-lg">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-slate-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
