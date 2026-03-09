function App() {
  return (
    <div className="min-h-screen bg-brand-piedra text-brand-negro">
      <header className="border-b border-brand-granito/20">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="#top"
            className="font-display text-3xl uppercase tracking-brand text-brand-azulete"
          >
            Contrapeso
          </a>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#propuesta" className="transition hover:text-brand-azulete">
              Propuesta
            </a>
            <a href="#experiencia" className="transition hover:text-brand-azulete">
              Experiencia
            </a>
            <a href="#contacto" className="transition hover:text-brand-azulete">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid min-h-[78vh] max-w-content items-end gap-10 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-7">
            <p className="mb-6 text-sm uppercase tracking-[0.2em] text-brand-granito">
              El sabor de lo real
            </p>

            <h1 className="max-w-4xl font-display text-6xl uppercase leading-[0.9] tracking-brand text-brand-azulete md:text-8xl">
              Lo bueno necesita tiempo.
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-brand-negro/80">
              Landing provisional construida sobre la identidad visual de Contrapeso.
              Esta versión fija la base del sistema visual, la estructura y el stack.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#propuesta"
                className="rounded-brand bg-brand-azulete px-6 py-4 text-center text-sm font-bold text-brand-blanco shadow-soft transition hover:-translate-y-0.5"
              >
                Ver propuesta
              </a>

              <a
                href="#contacto"
                className="rounded-brand border border-brand-negro/15 bg-brand-blanco px-6 py-4 text-center text-sm transition hover:border-brand-azulete hover:text-brand-azulete"
              >
                Contacto
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-brand border border-brand-granito/20 bg-brand-arena p-6 shadow-soft">
              <div className="aspect-[4/5] rounded-[1rem] border border-brand-granito/20 bg-gradient-to-br from-brand-arena via-brand-piedra to-brand-blanco" />
            </div>
          </div>
        </section>

        <section
          id="propuesta"
          className="border-y border-brand-granito/20 bg-brand-blanco"
        >
          <div className="mx-auto grid max-w-content gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-brand-granito">
                Propuesta
              </p>
              <h2 className="font-display text-5xl uppercase leading-[0.95] tracking-brand text-brand-negro">
                Una landing sobria, sensorial y contemporánea.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-brand-negro/80">
              <p>
                Esta primera versión usa la paleta corporativa, una jerarquía editorial
                clara y una composición con aire.
              </p>
              <p>
                El contenido es provisional. La estructura ya está preparada para recibir
                imágenes, mensajes y una escena ligera en three.js.
              </p>
            </div>
          </div>
        </section>

        <section id="experiencia">
          <div className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-24">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-brand-granito">
              Experiencia
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-brand bg-brand-blanco p-6 shadow-soft">
                <h3 className="font-display text-3xl uppercase tracking-brand text-brand-azulete">
                  Natural
                </h3>
                <p className="mt-4 text-sm leading-7 text-brand-negro/80">
                  Fotografía real, materiales limpios y tono visual contenido.
                </p>
              </article>

              <article className="rounded-brand bg-brand-blanco p-6 shadow-soft">
                <h3 className="font-display text-3xl uppercase tracking-brand text-brand-naranja">
                  Sensorial
                </h3>
                <p className="mt-4 text-sm leading-7 text-brand-negro/80">
                  Ritmo pausado, contraste preciso y protagonismo del detalle.
                </p>
              </article>

              <article className="rounded-brand bg-brand-blanco p-6 shadow-soft">
                <h3 className="font-display text-3xl uppercase tracking-brand text-brand-pasto">
                  Honesta
                </h3>
                <p className="mt-4 text-sm leading-7 text-brand-negro/80">
                  Sistema visual coherente, legible y preparado para crecer sin ruido.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-brand-negro text-brand-blanco">
          <div className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-24">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-blanco/60">
              Contacto
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-[0.95] tracking-brand">
              Base lista para construir la landing final.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-brand-blanco/80">
              En el siguiente paso añadiremos assets reales, una escena ligera con
              three.js y contenido revisado.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
