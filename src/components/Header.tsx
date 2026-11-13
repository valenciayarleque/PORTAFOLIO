import { useEffect, useState } from 'react'
import { ArrowUpRight, Contrast, Download, Mail, Menu, X } from 'lucide-react'
import { CFG, NAV_LINKS } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'
import type { CSSVars } from '../types'
import { asset } from '../utils/asset'

// Frase corta bajo cada enlace del menú móvil (la clave es el id de la sección)
const HINTS: Record<string, string> = {
  inicio: 'Quién soy',
  servicios: 'Qué puedo hacer por ti',
  proyectos: 'Lo que he construido',
  stack: 'Con qué lo construyo',
  certificados: 'Mi formación',
  contacto: 'Hablemos',
}

interface Props {
  onToggleTheme: () => void
}

export function Header({ onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy()
  const close = () => setOpen(false)

  useEffect(() => {
    document.body.classList.toggle('lk', open)
    return () => document.body.classList.remove('lk')
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const mail = `mailto:${CFG.email}`

  return (
    <header>
      <div className="c bar">
        <a className="logo" href="#inicio" onClick={close}>
          jhon<i>.vy</i>
        </a>

        {/* Navegación de escritorio */}
        <nav id="nav" aria-label="Principal">
          {NAV_LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'on' : ''}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Menú móvil a pantalla completa */}
        <div className={`mn${open ? ' open' : ''}`} id="menu-movil">
          <div className="mn-bg" aria-hidden="true">
            MENÚ
          </div>

          <div className="mn-top">
            <span>Navegación</span>
            <span>{String(NAV_LINKS.length).padStart(2, '0')} secciones</span>
          </div>

          <ul className="mn-list">
            {NAV_LINKS.map((l, i) => (
              <li key={l.id} style={{ '--i': i } as CSSVars}>
                <a href={`#${l.id}`} className={active === l.id ? 'on' : ''} onClick={close}>
                  <em>{String(i + 1).padStart(2, '0')}</em>
                  <span className="mn-t">
                    <b>{l.label}</b>
                    <small>{HINTS[l.id] ?? ''}</small>
                  </span>
                  <span className="mn-go">
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mn-tick" aria-hidden="true">
            <div>
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i}>Disponible ✦ Empleo ✦ Freelance ✦</span>
              ))}
            </div>
          </div>

          <div className="mn-foot" style={{ '--i': NAV_LINKS.length } as CSSVars}>
            <span className="mn-status">
              <b />
              Disponible para empleo y freelance
            </span>
            <a className="mn-btn p" href={mail} onClick={close}>
              <Mail size={18} aria-hidden="true" /> Escribir correo
            </a>
            <div className="mn-row">
              <a className="mn-btn" href={CFG.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="mn-btn" href={asset('cv/CV-Jhon-VY.pdf')} download>
                <Download size={18} aria-hidden="true" /> CV
              </a>
            </div>
          </div>
        </div>

        <div className="rt">
          <a className="btn p mg" href="#contacto" style={{ minHeight: '2.6rem', padding: '.4rem 1.2rem' }}>
            Contactar
          </a>
          <button className="ic" type="button" onClick={onToggleTheme} aria-label="Cambiar tema">
            <Contrast size={18} aria-hidden="true" />
          </button>
          <button
            className="ic mb"
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="menu-movil"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  )
}