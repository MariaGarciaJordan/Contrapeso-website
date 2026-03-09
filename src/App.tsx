import { Container } from './components/layout/Container'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ManifestoSection } from './sections/ManifestoSection'
import { ProposalSection } from './sections/ProposalSection'
import { ValuesSection } from './sections/ValuesSection'

function App() {
  return (
    <div className="min-h-screen bg-brand-piedra text-brand-negro">
      <header className="sticky top-0 z-20 border-b border-brand-granito/15 bg-brand-piedra/90 backdrop-blur-md">
        <Container className="flex items-center justify-between py-4">
          <a
            href="#top"
            className="font-display text-3xl uppercase tracking-brand text-brand-azulete"
          >
            Contrapeso
          </a>

          <nav className="hidden gap-5 text-xs uppercase tracking-[0.16em] text-brand-negro/70 md:flex">
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

      <main id="top">
        <HeroSection />
        <div id="manifiesto">
          <ManifestoSection />
        </div>
        <ProposalSection />
        <ExperienceSection />
        <ValuesSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
