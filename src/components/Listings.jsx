import { useEffect, useState } from 'react'
import { BedDouble, Bath, MoveRight, MapPin } from 'lucide-react'

const mockListings = [
  {
    id: '1',
    name: 'Palm Jumeirah – Signature Villa',
    image: 'https://images.unsplash.com/photo-1723539585119-cf804fdac9b7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYWxtJTIwSnVtZWlyYWglMjAlRTIlODAlOTMlMjBTaWduYXR1cmV8ZW58MHwwfHx8MTc2MzU4MDkyM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    price: 18750000,
    location: 'Palm Jumeirah, Dubai',
    beds: 6,
    baths: 7,
    area: '12,400 sqft'
  },
  {
    id: '2',
    name: 'Burj Khalifa – Sky Collection',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1600&auto=format&fit=crop',
    price: 9200000,
    location: 'Downtown Dubai',
    beds: 4,
    baths: 5,
    area: '6,100 sqft'
  },
  {
    id: '3',
    name: 'Dubai Marina – Penthouse',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop',
    price: 6400000,
    location: 'Dubai Marina',
    beds: 3,
    baths: 4,
    area: '3,200 sqft'
  }
]

function formatPrice(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

export default function Listings() {
  const [listings, setListings] = useState(mockListings)

  return (
    <section id="listings" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#0b1729_20%,#0d1b2a_100%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Listings</h2>
            <p className="mt-2 text-slate-300">A hand-picked selection across the city’s most sought-after neighborhoods.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">
            View all properties
            <MoveRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((l) => (
            <article key={l.id} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
              <div className="relative">
                <img src={l.image} alt={l.name} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white/90 backdrop-blur">New</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-emerald-300">
                  <MapPin size={16} />
                  <span className="text-xs">{l.location}</span>
                </div>
                <h3 className="mt-1 text-lg font-semibold text-white">{l.name}</h3>
                <div className="mt-1 text-emerald-300 font-semibold">{formatPrice(l.price)}</div>
                <div className="mt-4 flex items-center gap-4 text-sm text-slate-300">
                  <div className="inline-flex items-center gap-1"><BedDouble size={16} /> {l.beds} beds</div>
                  <div className="inline-flex items-center gap-1"><Bath size={16} /> {l.baths} baths</div>
                  <div className="inline-flex items-center gap-1">• {l.area}</div>
                </div>
                <div className="mt-5 flex gap-3">
                  <button className="flex-1 rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 px-4 py-2 text-slate-900 font-semibold">Request details</button>
                  <button className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white">3D tour</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
