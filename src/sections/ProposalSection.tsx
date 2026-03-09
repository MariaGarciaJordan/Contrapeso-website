import { Container } from '../components/layout/Container'

export function ProposalSection() {
  return (
    <section id="propuesta" className="border-y border-brand-granito/20 bg-brand-blanco">
      <Container className="grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-brand-granito">
            Propuesta
          </p>

          <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-brand text-brand-negro">
            Una landing sobria, sensorial y contemporánea.
          </h2>
        </div>

        <div className="space-y-6 text-sm leading-7 text-brand-negro/80">
          <p>
            Esta primera versión usa la paleta corporativa, una jerarquía editorial
            clara y una composición con aire.
          </p>

          <p>
            El contenido es provisional. La estructura ya está preparada para recibir
            imágenes, mensajes y una escena ligera en three.js.
          </p>
        </div>
      </Container>
    </section>
  )
}
