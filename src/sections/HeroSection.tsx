import { Container } from '../components/layout/Container'

export function HeroSection() {
  return (
    <section className="min-h-[78vh] py-16 lg:py-24">
      <Container className="grid items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-brand-granito">
            El sabor de lo real
          </p>

          <h1 className="max-w-4xl font-display text-6xl uppercase leading-[0.9] tracking-brand text-brand-azulete md:text-8xl">
            Lo bueno necesita tiempo.
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-brand-negro/80">
            Landing provisional construida sobre la identidad visual de Contrapeso.
            Esta versión fija la base del sistema visual, la estructura y el stack.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#propuesta"
              className="rounded-brand bg-brand-azulete px-6 py-4 text-center text-sm font-bold text-brand-blanco shadow-soft transition hover:-translate-y-0.5"
            >
              Ver propuesta
            </a>

            <a
              href="#contacto"
              className="rounded-brand border border-brand-negro/15 bg-brand-blanco px-6 py-4 text-center text-sm transition hover:border-brand-azulete hover:text-brand-azulete"
            >
              Contacto
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-brand border border-brand-granito/20 bg-brand-arena p-6 shadow-soft">
            <div className="aspect-[4/5] rounded-[1rem] border border-brand-granito/20 bg-gradient-to-br from-brand-arena via-brand-piedra to-brand-blanco" />
          </div>
        </div>
      </Container>
    </section>
  )
}
