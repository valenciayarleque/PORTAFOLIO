import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../utils/media'

export function Loader({ onStart }: { onStart: () => void }) {
  const [pct, setPct] = useState(0)
  const [out, setOut] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) {
      onStart()
      setGone(true)
      return
    }
    let raf = 0
    let t1 = 0
    let t2 = 0
    const t0 = performance.now()
    const frame = (t: number) => {
      const p = Math.min((t - t0) / 1300, 1)
      setPct(Math.round((1 - Math.pow(1 - p, 3)) * 100))
      if (p < 1) {
        raf = requestAnimationFrame(frame)
      } else {
        t1 = window.setTimeout(() => {
          setOut(true)
          onStart()
          t2 = window.setTimeout(() => setGone(true), 1100)
        }, 200)
      }
    }
    raf = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [onStart])

  if (gone) return null
  return (
    <div id="ld" className={out ? 'out' : ''}>
      <div className="lt">
        <b>{pct}</b>
        <span>%</span>
      </div>
      <div className="lb">
        <i style={{ width: `${pct}%` }} />
      </div>
      <p>Cargando portafolio</p>
    </div>
  )
}
