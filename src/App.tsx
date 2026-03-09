import { Container } from './components/layout/Container'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProposalSection } from './sections/ProposalSection'

function App() {
  return (
    <div className="min-h-screen bg-brand-piedra text-brand-negro">
      <header className="border-b border-brand-granito/20">
        <Container className="flex items-center justify-between py-5">
          <a
            href="#top"
            className="font-display text-3xl uppercase tracking-brand text-brand-azulete"
          >
            Contrapeso
          </a>

          <nav className="hidden gap-6 text-sm md:flex">
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
        <ProposalSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
