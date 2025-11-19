import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget)))
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('We received your request. We will reach out shortly!')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#0e2238_20%,#0f2946_100%)]" />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Request a private viewing</h2>
          <p className="mt-2 text-slate-300">Tell us what you’re looking for and our specialists will curate options for you.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full name" className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none border border-white/10" />
            <input name="email" type="email" required placeholder="Email" className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none border border-white/10" />
            <input name="phone" placeholder="Phone" className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none border border-white/10" />
            <input name="budget" placeholder="Budget (USD)" className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none border border-white/10" />
          </div>
          <textarea name="requirements" rows="4" placeholder="Tell us about your ideal property (location, bedrooms, view, etc.)" className="mt-4 w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none border border-white/10" />
          <div className="mt-4 flex items-center justify-between">
            <button className="rounded-xl bg-gradient-to-tr from-emerald-400 to-cyan-400 px-6 py-3 text-slate-900 font-semibold">Send inquiry</button>
            <div className="text-sm text-white/80">{status}</div>
          </div>
        </form>
      </div>
    </section>
  )
}
