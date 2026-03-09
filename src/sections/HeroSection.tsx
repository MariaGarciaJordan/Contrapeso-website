import { Container } from '../components/layout/Container'
import { heroImages } from '../lib/hero-images'
import { useParallaxOffset } from '../lib/useParallaxOffset'

export function HeroSection() {
  const offsetY = useParallaxOffset(0.11, 48)

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-brand-negro text-brand-blanco">
      <div className="absolute inset-0">
        <img
          src={heroImages.background}
          alt="Fondo principal de Contrapeso"
          className="hero-bg-parallax absolute inset-0 h-full w-full object-cover object-center"
          style={{ transform: `translate3d(0, ${offsetY}px, 0) scale(1.045)` }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,30,34,0.24)_0%,rgba(23,30,34,0.1)_42%,rgba(23,30,34,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,30,34,0.05)_0%,rgba(23,30,34,0.03)_48%,rgba(23,30,34,0.24)_100%)]" />
        <div className="hero-soft-haze absolute inset-0 opacity-60" />
      </div>

      <div className="relative z-10 min-h-[100dvh] px-5 pt-6 sm:px-8 sm:pt-8 lg:px-14 lg:pt-10">
        <div className="flex min-h-[100dvh] items-start pb-12 pt-28 sm:pb-16 sm:pt-32 md:pt-36 lg:items-center lg:pb-20 lg:pt-0">
          <Container>
            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-14">
              <div className="hero-copy-panel max-w-[min(94vw,76rem)] rounded-[1.75rem] bg-brand-negro/18 p-5 backdrop-blur-[10px] sm:p-6 lg:p-10 xl:p-12">
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-blanco/78">
                  El sabor de lo real
                </p>

                <h1 className="mt-3 font-display text-[clamp(4.4rem,12vw,11rem)] uppercase leading-[0.82] tracking-brand text-brand-azulete">
                  Sin prisa.
                </h1>

                <div className="mt-4 max-w-3xl space-y-4 text-sm leading-7 text-brand-blanco/92 md:text-[15px] lg:text-base">
                  <p>
                    Contrapeso devuelve peso al tiempo, al origen y a la materia.
                  </p>

                  <p>
                    Una marca construida desde el campo, el detalle y una forma más
                    honesta de mirar lo real.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#manifiesto"
                    className="rounded-brand bg-brand-azulete px-6 py-4 text-center text-sm font-bold text-brand-blanco shadow-soft transition hover:-translate-y-0.5"
                  >
                    Descubrir
                  </a>

                  <a
                    href="#propuesta"
                    className="rounded-brand border border-brand-blanco/24 bg-brand-blanco/8 px-6 py-4 text-center text-sm text-brand-blanco backdrop-blur-sm transition hover:border-brand-azulete hover:text-brand-azulete"
                  >
                    Ver propuesta
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
