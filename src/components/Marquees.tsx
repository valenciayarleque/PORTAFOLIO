import { useEffect, useRef } from 'react'
import { ROLE_WORDS, STACK } from '../data/portfolio'
import { prefersReducedMotion } from '../utils/media'

/** Cinta grande con texto contorneado; se inclina según la velocidad del scroll. */
export function RoleMarquee() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    let last = window.scrollY
    let sk = 0
    let raf = 0
    const frame = () => {
      const d = window.scrollY - last
      last = window.scrollY
      sk += (Math.max(-6, Math.min(6, d * 0.2)) - sk) * 0.1
      el.style.transform = `skewX(${-sk}deg)`
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [])

  const items = Array.from({ length: 4 }).flatMap(() => ROLE_WORDS)
  return (
    <div className="mq" ref={ref} aria-hidden="true">
      <div>
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}

/** Cinta de tecnologías en sentido inverso. */
export function StackMarquee() {
  const all = Object.entries(STACK)
    .filter(([k]) => k !== 'Soft skills')
    .flatMap(([, v]) => v)
  const items = [...all, ...all]
  return (
    <div className="mr" aria-hidden="true">
      <div>
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
