import { Container } from '../components/layout/Container'
import { heroImages } from '../lib/hero-images'
import { useParallaxOffset } from '../lib/useParallaxOffset'

const moments = [
  {
    eyebrow: 'Tiempo',
    title: 'Dar tiempo al tiempo.',
    text: 'Bajar las revoluciones. Comer sin mirar el reloj. Volver a escuchar la conversación completa.',
  },
  {
    eyebrow: 'Origen',
    title: 'El campo en presente.',
    text: 'No idealizamos. No decoramos. Nos acercamos a lo que está vivo, al ritmo que tiene y a lo que pide.',
  },
  {
    eyebrow: 'Detalle',
    title: 'El gusto de cada gesto.',
    text: 'Escucha el ritmo del campo. Huele la tierra recién labrada. Muerde el primer tomate de la temporada.',
  },
]

export function ExperienceSection() {
  const offsetY = useParallaxOffset(0.04, 24)

  return (
    <section id="experiencia" className="bg-brand-negro text-brand-blanco">
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-blanco/55">
              Experiencia
            </p>

            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.4rem,6.5vw,5rem)] uppercase leading-[0.94] tracking-brand">
              Se siente más.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-brand-blanco/75 md:text-[15px]">
              Construimos una experiencia sensorial. Visual. Material. Cercana.
              Menos velocidad. Más presencia.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 md:grid-cols-3">
              {moments.map((moment) => (
                <article
                  key={moment.title}
                  className="rounded-brand border border-brand-blanco/10 bg-brand-blanco/5 p-5 backdrop-blur-sm md:p-6"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-blanco/50">
                    {moment.eyebrow}
                  </p>

                  <h3 className="mt-3 font-display text-3xl uppercase tracking-brand text-brand-pasto">
                    {moment.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-brand-blanco/74">
                    {moment.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-brand border border-brand-blanco/10">
              <img
                src={heroImages.detail}
                alt="Escena visual de Contrapeso"
                className="h-[15rem] w-full object-cover object-center sm:h-[18rem] lg:h-[20rem]"
                style={{ transform: `translate3d(0, ${offsetY}px, 0) scale(1.02)` }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
