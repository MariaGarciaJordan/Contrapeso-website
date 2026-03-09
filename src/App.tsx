import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { SmoothScroll } from './components/system/SmoothScroll'
import { BrandLogo } from './components/system/BrandLogo'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { FooterSection } from './sections/FooterSection'
import { HeroSection } from './sections/HeroSection'
import { ManifestoSection } from './sections/ManifestoSection'
import { ProposalSection } from './sections/ProposalSection'
import { ValuesSection } from './sections/ValuesSection'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-brand-piedra text-brand-negro">
      <SmoothScroll />

      <BrandLogo />

      <div className="fixed right-5 top-5 z-50 md:hidden">
        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-brand-blanco/18 bg-brand-negro/28 p-3 text-brand-pasto shadow-soft backdrop-blur-md transition hover:text-brand-negro"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-brand-negro/38 backdrop-blur-sm md:hidden">
          <div className="absolute right-5 top-20 w-[min(86vw,20rem)] rounded-[1.5rem] border border-brand-negro/10 bg-brand-blanco/82 p-4 shadow-soft backdrop-blur-xl">
            <nav className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-pasto">
              <a
                href="#manifiesto"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 transition hover:bg-brand-negro/6 hover:text-brand-negro"
              >
                Manifiesto
              </a>
              <a
                href="#propuesta"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 transition hover:bg-brand-negro/6 hover:text-brand-negro"
              >
                Propuesta
              </a>
              <a
                href="#experiencia"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 transition hover:bg-brand-negro/6 hover:text-brand-negro"
              >
                Experiencia
              </a>
              <a
                href="#contacto"
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 transition hover:bg-brand-negro/6 hover:text-brand-negro"
              >
                Contacto
              </a>
            </nav>
          </div>
        </div>
      ) : null}

      <div className="fixed right-8 top-8 z-50 hidden md:block lg:right-14 lg:top-10">
        <nav className="flex items-center gap-5 rounded-full border border-brand-blanco/18 bg-brand-negro/28 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-brand-pasto shadow-soft backdrop-blur-md">
          <a href="#manifiesto" className="transition hover:text-brand-negro">
            Manifiesto
          </a>
          <a href="#propuesta" className="transition hover:text-brand-negro">
            Propuesta
          </a>
          <a href="#experiencia" className="transition hover:text-brand-negro">
            Experiencia
          </a>
          <a href="#contacto" className="transition hover:text-brand-negro">
            Contacto
          </a>
        </nav>
      </div>

      <main id="top">
        <HeroSection />
        <div id="manifiesto">
          <ManifestoSection />
        </div>
        <ProposalSection />
        <ExperienceSection />
        <ValuesSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  )
}

export default App
