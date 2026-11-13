import { Bot, Globe, Server } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionTitle } from './SplitText'

interface Service {
  n: string
  Icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}

const SERVICES: Service[] = [
  { n: '01', Icon: Globe, title: 'Desarrollo web', desc: 'Sitios corporativos, landings y aplicaciones web rápidas, accesibles y optimizadas para SEO.', tags: ['React', 'Next.js', 'Tailwind'] },
  { n: '02', Icon: Server, title: 'Sistemas y APIs', desc: 'Paneles de administración, autenticación, roles, APIs REST y bases de datos a medida.', tags: ['Node.js', 'FastAPI', 'PostgreSQL'] },
  { n: '03', Icon: Bot, title: 'Automatización con IA', desc: 'Asistentes, integración de modelos de lenguaje y flujos que eliminan tareas repetitivas.', tags: ['LLMs', 'n8n', 'RAG'] },
]

export function Services() {
  return (
    <section className="s" id="servicios">
      <div className="c">
        <div>
          <p className="eb">Servicios</p>
          <SectionTitle>De la idea al despliegue.</SectionTitle>
          <p className="sub rv">Para empresas, negocios y equipos que necesitan que algo funcione de verdad.</p>
        </div>
        <div className="cards">
          {SERVICES.map(({ n, Icon, title, desc, tags }) => (
            <article key={n} className="cd tl rv">
              <span className="num">{n}</span>
              <div className="ico">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="tg">
                {tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
