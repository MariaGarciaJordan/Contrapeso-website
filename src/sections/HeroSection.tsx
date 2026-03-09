import { HeroScene } from '../components/hero/HeroScene'
import { Container } from '../components/layout/Container'
import { heroImages } from '../lib/hero-images'

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-brand-negro text-brand-blanco">
      <HeroScene />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,rgba(23,30,34,0.18)_0%,rgba(23,30,34,0.55)_58%,rgba(23,30,34,0.92)_100%)]" />

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-between py-28 md:py-32 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-blanco/55">
              Contrapeso
            </p>

            <div className="mt-5 space-y-1">
              <h1 className="font-display text-[clamp(4rem,14vw,11rem)] uppercase leading-[0.8] tracking-brand text-brand-blanco">
                CAMPO.
              </h1>
              <h1 className="font-display text-[clamp(4rem,14vw,11rem)] uppercase leading-[0.8] tracking-brand text-brand-blanco/92">
                TIEMPO.
              </h1>
              <h1 className="font-display text-[clamp(4rem,14vw,11rem)] uppercase leading-[0.8] tracking-brand text-brand-pasto">
                FUEGO LENTO.
              </h1>
            </div>

            <div className="mt-6 max-w-xl space-y-4 text-sm leading-7 text-brand-blanco/76 md:text-[15px]">
              <p>
                Una marca para volver al origen sin nostalgia vacía. Más tierra. Más pausa. Más verdad.
              </p>

              <p>
                Creamos experiencias y productos que acercan a las personas a lo real.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#manifiesto"
                className="rounded-brand bg-brand-blanco px-6 py-4 text-center text-sm font-bold text-brand-negro shadow-soft transition hover:-translate-y-0.5"
              >
                Entrar
              </a>

              <a
                href="#propuesta"
                className="rounded-brand border border-brand-blanco/20 bg-brand-blanco/5 px-6 py-4 text-center text-sm text-brand-blanco backdrop-blur-sm transition hover:border-brand-pasto hover:text-brand-pasto"
              >
                Explorar
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-[22rem] lg:max-w-[26rem]">
              <article className="relative z-20 overflow-hidden rounded-[1.75rem] border border-brand-blanco/12 bg-brand-blanco/8 shadow-soft backdrop-blur-md">
                <img
                  src={heroImages.primary}
                  alt="Imagen principal de Contrapeso"
                  className="h-[21rem] w-full object-cover object-center sm:h-[26rem] lg:h-[32rem]"
                />
              </article>

              <article className="absolute -left-8 bottom-8 z-10 hidden w-40 overflow-hidden rounded-[1.25rem] border border-brand-blanco/10 bg-brand-blanco/8 shadow-soft backdrop-blur-md sm:block lg:-left-14 lg:w-44">
                <img
                  src={heroImages.secondaryTop}
                  alt="Detalle visual de Contrapeso"
                  className="h-48 w-full object-cover object-center lg:h-56"
                />
              </article>

              <article className="absolute -right-4 -top-8 z-30 hidden w-36 overflow-hidden rounded-[1.25rem] border border-brand-blanco/10 bg-brand-blanco/8 shadow-soft backdrop-blur-md sm:block lg:-right-10 lg:w-40">
                <img
                  src={heroImages.secondaryBottom}
                  alt="Segundo detalle visual de Contrapeso"
                  className="h-40 w-full object-cover object-center lg:h-48"
                />
              </article>

              <div className="absolute -bottom-5 right-4 z-30 rounded-full border border-brand-blanco/12 bg-brand-blanco/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-brand-blanco/75 backdrop-blur-md">
                El sabor de lo real
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-brand-blanco/10 pt-6 text-xs uppercase tracking-[0.2em] text-brand-blanco/48 md:grid-cols-3">
          <span>Tiempo sin prisa</span>
          <span>Origen en presente</span>
          <span>Tecnología para cuidar</span>
        </div>
      </Container>
    </section>
  )
}
