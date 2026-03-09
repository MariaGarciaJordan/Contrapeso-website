import { Container } from '../components/layout/Container'

const values = [
  {
    title: 'Esperanza',
    text: 'Miramos el campo desde una posición realista y fértil. Donde otros no ven oportunidad, nosotros vemos futuro.',
  },
  {
    title: 'Identidad',
    text: 'Somos quien decimos ser. Lo auténtico y lo natural no necesitan ruido ni disfraces.',
  },
  {
    title: 'Innovación para cuidar',
    text: 'Usamos la tecnología a favor de la naturaleza para hacer mejor lo que siempre estuvo ahí.',
  },
  {
    title: 'Honestidad',
    text: 'Prestamos atención a cada detalle y trabajamos con claridad, sin artificio y sin exceso.',
  },
]

export function ValuesSection() {
  return (
    <section className="bg-brand-arena/55">
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-granito">
            Valores
          </p>

          <h2 className="mt-4 font-display text-[clamp(2.3rem,6vw,4.75rem)] uppercase leading-[0.94] tracking-brand text-brand-negro">
            Una forma de hacer. Una forma de estar.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-brand border border-brand-granito/15 bg-brand-blanco p-6 shadow-soft md:p-8"
            >
              <h3 className="font-display text-3xl uppercase tracking-brand text-brand-azulete">
                {value.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-brand-negro/78">
                {value.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
