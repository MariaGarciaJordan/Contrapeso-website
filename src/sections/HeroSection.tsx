import { Container } from '../components/layout/Container'
import { heroImages } from '../lib/hero-images'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-piedra text-brand-negro">
      <Container className="relative py-24 md:py-28 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="order-2 lg:order-1 lg:col-span-4">
            <div className="rounded-[1.75rem] border border-brand-granito/15 bg-brand-blanco/80 p-6 shadow-soft backdrop-blur-sm md:p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-brand-granito">
                Contrapeso
              </p>

              <h1 className="mt-5 font-display text-[clamp(3.25rem,8vw,6.5rem)] uppercase leading-[0.88] tracking-brand text-brand-azulete">
                Lo bueno
                <br />
                necesita
                <br />
                tiempo.
              </h1>

              <div className="mt-6 max-w-md space-y-4 text-sm leading-7 text-brand-negro/80 md:text-[15px]">
                <p>
                  Creamos experiencias y productos excepcionales que acercan a
                  las personas a lo real.
                </p>

                <p>
                  A fuego lento se vive mejor —y se entiende mejor lo que
                  importa.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="#manifiesto"
                  className="rounded-brand bg-brand-azulete px-6 py-4 text-center text-sm font-bold text-brand-blanco shadow-soft transition hover:-translate-y-0.5"
                >
                  Descubrir Contrapeso
                </a>

                <a
                  href="#propuesta"
                  className="rounded-brand border border-brand-negro/12 bg-brand-piedra px-6 py-4 text-center text-sm transition hover:border-brand-azulete hover:text-brand-azulete"
                >
                  Ver propuesta
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-8">
            <div className="hero-fracture relative min-h-[30rem] overflow-hidden rounded-[2rem] bg-brand-negro shadow-soft sm:min-h-[36rem] lg:min-h-[42rem]">
              <img
                src={heroImages.primary}
                alt="Imagen principal de Contrapeso"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,30,34,0.12)_0%,rgba(23,30,34,0.35)_45%,rgba(23,30,34,0.6)_100%)]" />
              <div className="granite-overlay absolute inset-0 opacity-35" />

              <div className="absolute left-0 top-0 w-full p-5 sm:p-6 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-[14rem] rounded-full border border-brand-blanco/18 bg-brand-blanco/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-brand-blanco/88 backdrop-blur-sm">
                    El sabor de lo real
                  </div>

                  <div className="hidden rounded-full border border-brand-blanco/18 bg-brand-blanco/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-brand-blanco/80 backdrop-blur-sm md:block">
                    Un placer del presente
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 lg:p-8">
                <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                  <div>
                    <p className="max-w-xl text-sm leading-7 text-brand-blanco/88 md:text-[15px]">
                      Luz natural, textura y tiempo detenido. Una portada que
                      se apoya en la imagen —no en el ruido— para llevar la
                      marca a su terreno.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:max-w-sm lg:ml-auto">
                    <article className="overflow-hidden rounded-[1.1rem] border border-brand-blanco/12 bg-brand-blanco/8 backdrop-blur-sm">
                      <img
                        src={heroImages.secondaryTop}
                        alt="Detalle visual de Contrapeso"
                        className="h-28 w-full object-cover object-center sm:h-32"
                      />
                    </article>

                    <article className="overflow-hidden rounded-[1.1rem] border border-brand-blanco/12 bg-brand-blanco/8 backdrop-blur-sm">
                      <img
                        src={heroImages.secondaryBottom}
                        alt="Segundo detalle visual de Contrapeso"
                        className="h-28 w-full object-cover object-center sm:h-32"
                      />
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
