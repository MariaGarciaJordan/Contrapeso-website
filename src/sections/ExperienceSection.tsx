import { Container } from '../components/layout/Container'

const items = [
  {
    title: 'Natural',
    accent: 'text-brand-azulete',
    description: 'Fotografía real, materiales limpios y tono visual contenido.',
  },
  {
    title: 'Sensorial',
    accent: 'text-brand-naranja',
    description: 'Ritmo pausado, contraste preciso y protagonismo del detalle.',
  },
  {
    title: 'Honesta',
    accent: 'text-brand-pasto',
    description: 'Sistema visual coherente, legible y preparado para crecer sin ruido.',
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia">
      <Container className="py-16 lg:py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-brand-granito">
          Experiencia
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-brand bg-brand-blanco p-6 shadow-soft">
              <h3
                className={`font-display text-3xl uppercase tracking-brand ${item.accent}`}
              >
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-brand-negro/80">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
