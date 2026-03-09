import { Container } from '../components/layout/Container'
import { heroImages } from '../lib/hero-images'

export function HeroSection() {
  return (
    <section className="overflow-hidden py-6 md:py-8 lg:py-10">
      <Container className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="order-2 lg:order-1 lg:col-span-5 lg:pb-6">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-granito">
            El sabor de lo real
          </p>

          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3.5rem,10vw,8rem)] uppercase leading-[0.88] tracking-brand text-brand-azulete">
            En Contrapeso el tiempo no vuela.
          </h1>

          <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-brand-negro/80 md:text-[15px]">
            <p>
              Creamos experiencias y productos excepcionales que acercan a las personas a lo real.
            </p>

            <p>
              A fuego lento se vive mejor. La luz de la tarde. El peso del mantel.
              La conversación sin prisa. El campo, otra vez, en el centro.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#manifiesto"
              className="rounded-brand bg-brand-azulete px-6 py-4 text-center text-sm font-bold text-brand-blanco shadow-soft transition hover:-translate-y-0.5"
            >
              Descubrir Contrapeso
            </a>

            <a
              href="#contacto"
              className="rounded-brand border border-brand-negro/15 bg-brand-blanco px-6 py-4 text-center text-sm transition hover:border-brand-azulete hover:text-brand-azulete"
            >
              Ver más
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-[1.3fr_0.9fr]">
            <article className="relative overflow-hidden rounded-[1.75rem] bg-brand-arena shadow-soft">
              <img
                src={heroImages.primary}
                alt="Imagen principal de Contrapeso"
                className="h-[22rem] w-full object-cover object-center sm:h-[28rem] lg:h-[40rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-negro/28 via-brand-negro/6 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                <p className="max-w-xs text-xs uppercase tracking-[0.18em] text-brand-blanco/90">
                  Un placer del presente
                </p>
              </div>
            </article>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-1">
              <article className="overflow-hidden rounded-[1.5rem] bg-brand-blanco shadow-soft">
                <img
                  src={heroImages.secondaryTop}
                  alt="Detalle visual de Contrapeso"
                  className="h-44 w-full object-cover object-center sm:h-56 lg:h-[19.25rem]"
                />
              </article>

              <article className="overflow-hidden rounded-[1.5rem] bg-brand-blanco shadow-soft">
                <img
                  src={heroImages.secondaryBottom}
                  alt="Segundo detalle visual de Contrapeso"
                  className="h-44 w-full object-cover object-center sm:h-56 lg:h-[19.25rem]"
                />
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
