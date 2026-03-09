import { Container } from '../components/layout/Container'
import { heroImages } from '../lib/hero-images'
import { useParallaxOffset } from '../lib/useParallaxOffset'

export function HeroSection() {
  const offsetY = useParallaxOffset(0.045, 32)

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-brand-negro text-brand-blanco">
      <div className="absolute inset-0">
        <img
          src={heroImages.background}
          alt="Fondo principal de Contrapeso"
          className="hero-bg-parallax absolute inset-0 h-full w-full object-cover object-center"
          style={{ transform: `translate3d(0, ${offsetY}px, 0) scale(1.035)` }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,30,34,0.34)_0%,rgba(23,30,34,0.14)_42%,rgba(23,30,34,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,30,34,0.08)_0%,rgba(23,30,34,0.04)_48%,rgba(23,30,34,0.34)_100%)]" />
        <div className="hero-soft-haze absolute inset-0 opacity-70" />
      </div>

      <Container className="relative z-10 flex min-h-[100dvh] items-end pb-14 pt-32 sm:pb-16 lg:pb-20 lg:pt-36">
        <div className="w-full">
          <div className="hero-copy-panel max-w-[min(94vw,76rem)] rounded-[1.75rem] border border-brand-blanco/12 bg-brand-negro/18 p-6 backdrop-blur-[10px] sm:p-8 lg:p-10 xl:p-12">
            <p className="text-[11px] uppercase tracking-[0.26em] text-brand-blanco/76">
              El sabor de lo real
            </p>

            <h1 className="mt-4 font-display text-[clamp(4.2rem,12vw,10rem)] uppercase leading-[0.82] tracking-brand text-brand-azulete">
              Sin prisa.
            </h1>

            <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-brand-blanco/92 md:text-[15px] lg:text-base">
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
                className="rounded-brand border border-brand-blanco/22 bg-brand-blanco/8 px-6 py-4 text-center text-sm text-brand-blanco backdrop-blur-sm transition hover:border-brand-azulete hover:text-brand-azulete"
              >
                Ver propuesta
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
