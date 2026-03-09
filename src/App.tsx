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
      <header className="fixed left-0 right-0 top-0 z-30">
        <Container className="flex items-center justify-between py-5">
          <a
            href="#top"
            className="font-display text-3xl uppercase tracking-brand text-brand-blanco drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          >
            Contrapeso
          </a>

          <nav className="hidden gap-5 text-xs uppercase tracking-[0.16em] text-brand-blanco/78 md:flex">
            <a href="#manifiesto" className="transition hover:text-brand-pasto">
              Manifiesto
            </a>
            <a href="#propuesta" className="transition hover:text-brand-pasto">
              Propuesta
            </a>
            <a href="#experiencia" className="transition hover:text-brand-pasto">
              Experiencia
            </a>
            <a href="#contacto" className="transition hover:text-brand-pasto">
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
