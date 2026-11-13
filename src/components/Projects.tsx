import { ArrowUpRight } from 'lucide-react'
import { PROJ } from '../data/portfolio'
import type { CSSVars } from '../types'
import { asset } from '../utils/asset'
import { SectionTitle } from './SplitText'

const BARS: CSSVars[] = [
  { '--w': '40%', '--t': '1.2rem' },
  { '--w': '75%', '--t': '3rem' },
  { '--w': '55%', '--t': '4.2rem' },
]

export function Projects() {
  return (
    <section className="s" id="proyectos">
      <div className="c">
        <div>
          <p className="eb">Proyectos</p>
          <SectionTitle>Trabajo seleccionado.</SectionTitle>
          <p className="sub rv">Algunos de los sistemas y sitios que he construido.</p>
        </div>
        <div className="cards">
          {PROJ.map((p) => (
            <article key={p.t} className="cd tl rv">
              <div className={`th${p.img ? ' has-img' : ''}`}>
                {p.img ? (
                  <img src={asset(p.img)} alt={`Captura del proyecto ${p.t}`} loading="lazy" />
                ) : (
                  BARS.map((style, i) => <i key={i} style={style} />)
                )}
              </div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <div className="tg">
                {p.s.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              {p.u && (
                <div className="btns mt-4">
                  <a
                    className="btn"
                    href={p.u}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: '.45rem 1rem', fontSize: '.85rem', minHeight: '2.5rem' }}
                  >
                    Ver proyecto <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}