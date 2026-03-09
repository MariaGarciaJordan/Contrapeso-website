import { Container } from '../components/layout/Container'

export function ContactSection() {
  return (
    <section id="contacto" className="border-t border-brand-granito/20 bg-brand-blanco">
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-granito">
              Contacto
            </p>

            <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.8rem)] uppercase leading-[0.94] tracking-brand text-brand-negro">
              Lo real, honesto y transparente.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-brand-negro/80 md:text-[15px]">
              Esta base ya está preparada para evolucionar con contenido definitivo,
              fotografía seleccionada y una capa visual ligera en three.js.
            </p>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <a
              href="#top"
              className="inline-flex rounded-brand bg-brand-azulete px-6 py-4 text-sm font-bold text-brand-blanco shadow-soft transition hover:-translate-y-0.5"
            >
              Volver arriba
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
