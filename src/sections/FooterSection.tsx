import { Container } from '../components/layout/Container'

export function FooterSection() {
  return (
    <footer className="border-t border-brand-granito/20 bg-brand-negro text-brand-blanco">
      <Container className="grid gap-8 py-10 md:grid-cols-2 md:items-end md:py-12">
        <div>
          <a
            href="#top"
            className="font-display text-4xl tracking-brand text-brand-blanco"
          >
            Contrapeso
          </a>

          <p className="mt-4 max-w-md text-sm leading-7 text-brand-blanco/72">
            Lo bueno necesita tiempo. Una marca construida desde el campo,
            el detalle y una forma más honesta de mirar lo real.
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-[11px] uppercase tracking-[0.18em] text-brand-blanco/48">
            El sabor de lo real
          </p>

          <div className="mt-4 flex flex-wrap gap-3 md:justify-end">
            <a
              href="#manifiesto"
              className="rounded-full border border-brand-blanco/12 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-brand-blanco/78 transition hover:text-brand-pasto"
            >
              Manifiesto
            </a>
            <a
              href="#propuesta"
              className="rounded-full border border-brand-blanco/12 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-brand-blanco/78 transition hover:text-brand-pasto"
            >
              Propuesta
            </a>
            <a
              href="#experiencia"
              className="rounded-full border border-brand-blanco/12 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-brand-blanco/78 transition hover:text-brand-pasto"
            >
              Experiencia
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-brand-blanco/12 px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-brand-blanco/78 transition hover:text-brand-pasto"
            >
              Contacto
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
