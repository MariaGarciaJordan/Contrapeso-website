import { Container } from '../components/layout/Container'

export function ManifestoSection() {
  return (
    <section className="border-y border-brand-granito/20 bg-brand-blanco">
      <Container className="grid gap-8 py-16 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-granito">
            Manifiesto
          </p>
        </div>

        <div className="space-y-6 lg:col-span-8">
          <h2 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.92] tracking-brand text-brand-negro">
            Despertamos la emoción por el campo de ayer.
          </h2>

          <div className="max-w-3xl space-y-5 text-sm leading-7 text-brand-negro/80 md:text-[15px]">
            <p>
              Creemos que el ritmo natural del campo merece respeto. Por eso,
              creamos experiencias y productos que acercan a las personas a lo real.
            </p>

            <p>
              Esto es tiempo. Es origen. Es detalle. Es una pausa —la que casi
              nunca nos damos— para volver a mirar, oler, tocar y saborear sin prisa.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
