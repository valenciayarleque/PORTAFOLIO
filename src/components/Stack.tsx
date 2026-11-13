import { useState } from 'react'
import { Bot, Cloud, Database, LayoutTemplate, Monitor, Server, Users, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { STACK } from '../data/portfolio'
import type { CSSVars } from '../types'
import { SectionTitle } from './SplitText'

const KEYS = Object.keys(STACK)

// Icono y descripción por categoría (la clave debe coincidir con STACK en portfolio.ts)
const META: Record<string, { Icon: LucideIcon; desc: string }> = {
  Frontend: { Icon: LayoutTemplate, desc: 'Interfaces rápidas, accesibles y pensadas primero para móvil.' },
  Backend: { Icon: Server, desc: 'APIs, autenticación y lógica de negocio que escala.' },
  Datos: { Icon: Database, desc: 'Modelado y consulta de datos relacionales y documentales.' },
  IA: { Icon: Bot, desc: 'Modelos de lenguaje y automatizaciones que ahorran horas de trabajo.' },
  'Despliegue y Cloud': { Icon: Cloud, desc: 'De mi máquina a producción: contenedores, hosting y monitoreo.' },
  Herramientas: { Icon: Wrench, desc: 'El flujo de trabajo diario: versionado, pruebas y diseño.' },
  'Soft skills': { Icon: Users, desc: 'Lo que hace que un equipo entregue mejor y más rápido.' },
  'Office y TI': { Icon: Monitor, desc: 'Análisis, documentación y soporte para el día a día de una empresa.' },
}

/** Monograma de 2 letras para la tarjeta (ej. "TypeScript" → "TY"). */
const mono = (name: string): string => name.replace(/[^a-zA-Z0-9]/g, '').slice(0, 2).toUpperCase()

export function Stack() {
  const [active, setActive] = useState<string>(KEYS[0])
  const idx = KEYS.indexOf(active)
  const { Icon, desc } = META[active] ?? META[KEYS[0]]
  const items = STACK[active]

  return (
    <section className="s" id="stack">
      <div className="c">
        <div>
          <p className="eb">Stack y habilidades</p>
          <SectionTitle>Tecnologías que uso a diario.</SectionTitle>
        </div>

        <div className="rv">
          <div className="sk-tabs" role="tablist" aria-label="Categorías">
            {KEYS.map((k) => {
              const TabIcon = (META[k] ?? META[KEYS[0]]).Icon
              return (
                <button
                  key={k}
                  className="sk-tab"
                  role="tab"
                  type="button"
                  aria-selected={k === active}
                  onClick={() => setActive(k)}
                >
                  <TabIcon size={18} aria-hidden="true" />
                  {k}
                  <small>{STACK[k].length}</small>
                </button>
              )
            })}
          </div>

          <div className="cd sk-panel" role="tabpanel">
            <span className="sk-num" aria-hidden="true">
              {String(idx + 1).padStart(2, '0')}
            </span>

            <div className="sk-head" key={`h-${active}`}>
              <div className="sk-bigico">
                <Icon size={32} aria-hidden="true" />
              </div>
              <div>
                <h3>{active}</h3>
                <p>{desc}</p>
              </div>
              <div className="sk-count">
                <b>{String(items.length).padStart(2, '0')}</b>
                <span>tecnologías</span>
              </div>
            </div>

            {/* key={active}: reinicia la animación de entrada al cambiar de categoría */}
            <div className="sk-grid" key={active}>
              {items.map((t, i) => (
                <div key={t} className="sk-tile" style={{ '--i': i } as CSSVars}>
                  <span className="sk-badge">{mono(t)}</span>
                  <span className="sk-name">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}