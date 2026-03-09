import { Container } from './components/layout/Container'
import { SmoothScroll } from './components/system/SmoothScroll'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { FooterSection } from './sections/FooterSection'
import { HeroSection } from './sections/HeroSection'
import { ManifestoSection } from './sections/ManifestoSection'
import { ProposalSection } from './sections/ProposalSection'
import { ValuesSection } from './sections/ValuesSection'

function App() {
  return (
    <div className="min-h-screen bg-brand-piedra text-brand-negro">
      <SmoothScroll />

      <header className="sticky top-0 z-40 pt-4">
        <Container className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="font-display text-3xl tracking-brand text-brand-azulete drop-shadow-[0_2px_10px_rgba(0,0,0,0.14)]"
          >
            Contrapeso
          </a>

          <nav className="hidden items-center gap-5 rounded-full border border-brand-negro/10 bg-brand-blanco/78 px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-brand-negro shadow-soft backdrop-blur-md md:flex">
            <a href="#manifiesto" className="transition hover:text-brand-azulete">
              Manifiesto
            </a>
            <a href="#propuesta" className="transition hover:text-brand-azulete">
              Propuesta
            </a>
            <a href="#experiencia" className="transition hover:text-brand-azulete">
              Experiencia
            </a>
            <a href="#contacto" className="transition hover:text-brand-azulete">
              Contacto
            </a>
          </nav>
        </Container>
      </header>

      <main id="top" className="-mt-20">
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
