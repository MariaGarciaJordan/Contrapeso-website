import { Container } from '../components/layout/Container'
import { heroImages } from '../lib/hero-images'
import { useParallaxOffset } from '../lib/useParallaxOffset'

const notes = [
  'Respeto por el origen',
  'Experiencias sin prisa',
  'Productos que acercan a lo real',
]

export function ProposalSection() {
  const offsetY = useParallaxOffset(0.035, 18)

  return (
    <section id="propuesta" className="bg-brand-piedra">
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-brand-granito/12 shadow-soft">
              <div className="relative h-[22rem] overflow-hidden bg-brand-arena sm:h-[28rem] lg:h-[36rem]">
                <img
                  src={heroImages.feature}
                  alt="Escena visual de producto Contrapeso"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  style={{ transform: `translate3d(0, ${offsetY}px, 0) scale(1.025)` }}
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-granito">
              Propuesta
            </p>

            <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,6.5vw,5rem)] uppercase leading-[0.94] tracking-brand text-brand-negro">
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
