import { Container } from '../components/layout/Container'

const notes = [
  'Respeto por el origen',
  'Experiencias sin prisa',
  'Productos que acercan a lo real',
]

export function ProposalSection() {
  return (
    <section id="propuesta" className="bg-brand-piedra">
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-granito">
              Propuesta
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="max-w-4xl font-display text-[clamp(2.4rem,6.5vw,5rem)] uppercase leading-[0.94] tracking-brand text-brand-negro">
              Un reencuentro con la naturaleza. Con tu naturaleza.
            </h2>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-brand-negro/80 md:text-[15px]">
              Contrapeso se construye como un oasis para quienes viven con prisa y
              necesitan volver al detalle, al tiempo y al respeto por lo que nace del campo.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {notes.map((note) => (
                <span
                  key={note}
                  className="rounded-full border border-brand-granito/20 bg-brand-blanco px-4 py-2 text-xs uppercase tracking-[0.16em] text-brand-negro/75"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
