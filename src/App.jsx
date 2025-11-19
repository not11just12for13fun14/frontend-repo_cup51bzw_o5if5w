import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import Listings from './components/Listings'
import WhyDubai from './components/WhyDubai'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero3D />
      <Listings />
      <WhyDubai />
      <Contact />
      <footer className="py-10 text-center text-white/60">
        © {new Date().getFullYear()} Dubai Estates — All rights reserved.
      </footer>
    </div>
  )
}

export default App
