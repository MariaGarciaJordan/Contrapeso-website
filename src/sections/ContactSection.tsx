import { Container } from '../components/layout/Container'

export function ContactSection() {
  return (
    <section id="contacto" className="bg-brand-negro text-brand-blanco">
      <Container className="py-16 lg:py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-blanco/60">
          Contacto
        </p>

        <h2 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.95] tracking-brand">
          Base lista para construir la landing final.
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-brand-blanco/80">
          En el siguiente paso añadiremos assets reales, una escena ligera con
          three.js y contenido revisado.
        </p>
      </Container>
    </section>
  )
}
