import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Manifesto } from './components/Manifesto'
import { TrustBar } from './components/TrustBar'
import { LabModel } from './components/LabModel'
import { FlagshipProduct } from './components/FlagshipProduct'
import { BuildAreas } from './components/BuildAreas'
import { BrandArchitecture } from './components/BrandArchitecture'
import { HiringCTA } from './components/HiringCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-night text-pearl">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Manifesto />
        <LabModel />
        <FlagshipProduct />
        <BuildAreas />
        <BrandArchitecture />
        <HiringCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
