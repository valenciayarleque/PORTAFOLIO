import { useEffect } from 'react'
import { canHover, prefersReducedMotion } from '../utils/media'

/** Tarjetas con brillo + tilt 3D (.cd / .tl) y botones magnéticos (.mg). Solo con mouse. */
export function useHoverEffects() {
  useEffect(() => {
    if (!canHover() || prefersReducedMotion()) return
    let lastMg: HTMLElement | null = null

    const resetMg = (b: HTMLElement) => {
      b.style.setProperty('--mx', '0px')
      b.style.setProperty('--my', '0px')
    }

    const onMove = (e: PointerEvent) => {
      const t = e.target
      if (!(t instanceof Element)) return

      const card = t.closest<HTMLElement>('.cd')
      if (card) {
        const r = card.getBoundingClientRect()
        const x = e.clientX - r.left
        const y = e.clientY - r.top
        card.style.setProperty('--x', `${x}px`)
        card.style.setProperty('--y', `${y}px`)
        if (card.classList.contains('tl')) {
          card.style.transform = `perspective(900px) rotateX(${(0.5 - y / r.height) * 7}deg) rotateY(${(x / r.width - 0.5) * 7}deg)`
        }
      }

      const mg = t.closest<HTMLElement>('.mg')
      if (mg) {
        const r = mg.getBoundingClientRect()
        mg.style.setProperty('--mx', `${(e.clientX - r.left - r.width / 2) * 0.22}px`)
        mg.style.setProperty('--my', `${(e.clientY - r.top - r.height / 2) * 0.3}px`)
      }
      if (lastMg && lastMg !== mg) resetMg(lastMg)
      lastMg = mg
    }

    const onOut = (e: PointerEvent) => {
      const t = e.target
      if (!(t instanceof Element)) return
      const c = t.closest<HTMLElement>('.cd.tl')
      if (c) c.style.transform = ''
    }

    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerout', onOut)
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerout', onOut)
    }
  }, [])
}
