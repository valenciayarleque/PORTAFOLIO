import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../utils/media'

export function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        if (prefersReducedMotion()) {
          setValue(to)
          return
        }
        const t0 = performance.now()
        const frame = (t: number) => {
          const p = Math.min((t - t0) / 1500, 1)
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))))
          if (p < 1) raf = requestAnimationFrame(frame)
        }
        raf = requestAnimationFrame(frame)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  return (
    <b ref={ref}>
      {value}
      {value > 0 ? suffix : ''}
    </b>
  )
}
