import { ArrowUpRight, Code, Download, Sparkles } from 'lucide-react'
import { CERTS, CFG } from '../data/portfolio'
import { useScramble } from '../hooks/useScramble'
import { asset } from '../utils/asset'
import { CountUp } from './CountUp'
import { ProfileInner } from './ProfileInner'
import { SplitChars } from './SplitText'

export function Hero({ photo }: { photo: string | null }) {
  const role = useScramble(CFG.roles)

  return (
    <section className="hero" id="inicio">
      <div className="c">
        <div className="hg">
          <div>
            <span className="pill">
              <b />
              Disponible para empleo y freelance
            </span>

            <h1 aria-label="Hola, soy Jhon VY">
              <span className="ln">
                <small aria-hidden="true">
                  <SplitChars text="Hola, soy" offset={0} />
                </small>
              </span>
              <span className="ln">
                <span className="gl gt" id="h1b" data-t="Jhon VY" aria-hidden="true">
                  <SplitChars text="Jhon VY" offset={9} />
                </span>
              </span>
            </h1>

            <p className="role">
              <span>{role}</span>
              <span className="cur">█</span>
            </p>

            <p className="lead">
              <strong>Egresado de la carrera de Ingeniería de Software con IA.</strong> Combino el desarrollo Full Stack
              moderno con la automatización inteligente para crear plataformas web rápidas y sistemas robustos a la
              medida. Apasionado por la tecnología y enfocado en sumar valor en equipos orientados a resultados.
            </p>

            <div className="btns">
              <a className="btn p mg" href={asset('cv/CV-Jhon-VY.pdf')} download>
                <Download size={18} aria-hidden="true" /> Descargar CV
              </a>
              <a className="btn mg" href="#contacto">
                Contactar
              </a>
              <a className="btn mg" href="#certificados">
                Ver certificados
              </a>
            </div>

            <div className="soc">
              {CFG.github && (
                <a href={CFG.github} target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowUpRight size={14} className="inline align-text-bottom" aria-hidden="true" />
                </a>
              )}
              {CFG.linkedin && (
                <a href={CFG.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <ArrowUpRight size={14} className="inline align-text-bottom" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <div className="av">
            <svg className="orb" viewBox="0 0 200 200" aria-hidden="true">
              <defs>
                <path id="orbp" d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" />
              </defs>
              <text>
                <textPath href="#orbp" textLength={520} lengthAdjust="spacing">
                  {'FULL STACK • IA APLICADA • AUTOMATIZACIÓN • SISTEMAS A MEDIDA • '}
                </textPath>
              </text>
            </svg>
            <div className="ph">
              <ProfileInner photo={photo} />
            </div>
            <span className="fc f1 flex items-center gap-1.5">
              <Code size={14} aria-hidden="true" /> Full Stack
            </span>
            <span className="fc f2 flex items-center gap-1.5">
              <Sparkles size={14} aria-hidden="true" /> IA aplicada
            </span>
          </div>
        </div>

        <div className="stats">
          <div className="st rv">
            <CountUp to={100} suffix="%" />
            <span>Responsive y mobile first</span>
          </div>
          <div className="st rv">
            <CountUp to={2} />
            <span>Áreas: Web · Sistemas · IA</span>
          </div>
          <div className="st rv">
            <CountUp to={20} suffix="+" />
            <span>Tecnologías en mi stack</span>
          </div>
          <div className="st rv">
            <CountUp to={CERTS.length} />
            <span>Certificados verificables</span>
          </div>
        </div>
      </div>
    </section>
  )
}
