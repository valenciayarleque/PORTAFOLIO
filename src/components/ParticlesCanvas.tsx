import { useEffect, useRef } from 'react'
import type { Theme } from '../hooks/useTheme'
import { prefersReducedMotion } from '../utils/media'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

export function ParticlesCanvas({ theme }: { theme: Theme }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const rgb = useRef('255,45,70')

  // Recalcula el color de las partículas al cambiar de tema
  useEffect(() => {
    const h = getComputedStyle(document.documentElement).getPropertyValue('--a').trim()
    if (/^#[0-9a-f]{6}$/i.test(h)) {
      rgb.current = `${parseInt(h.slice(1, 3), 16)},${parseInt(h.slice(3, 5), 16)},${parseInt(h.slice(5, 7), 16)}`
    }
  }, [theme])

  useEffect(() => {
    const cv = ref.current
    const cx = cv?.getContext('2d')
    if (!cv || !cx) return

    const DP = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0
    let H = 0
    let ps: Particle[] = []
    let mx = -999
    let my = -999
    let raf = 0

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      if (w === W && ps.length) {
        H = h
        cv.height = h * DP
        cx.setTransform(DP, 0, 0, DP, 0, 0)
        return
      }
      W = w
      H = h
      cv.width = W * DP
      cv.height = H * DP
      cx.setTransform(DP, 0, 0, DP, 0, 0)
      const n = Math.min(85, Math.round((W * H) / 17000))
      ps = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
      }))
    }
    const onMove = (e: PointerEvent) => {
      mx = e.clientX
      my = e.clientY
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)

    const draw = () => {
      if (!document.hidden) {
        cx.clearRect(0, 0, W, H)
        for (let i = 0; i < ps.length; i++) {
          const p = ps[i]
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > W) p.vx *= -1
          if (p.y < 0 || p.y > H) p.vy *= -1
          const dx = mx - p.x
          const dy = my - p.y
          const dm = dx * dx + dy * dy
          if (dm < 22500) {
            p.x -= dx * 0.004
            p.y -= dy * 0.004
          }
          cx.fillStyle = `rgba(${rgb.current},.75)`
          cx.beginPath()
          cx.arc(p.x, p.y, 1.6, 0, 6.283)
          cx.fill()
          for (let j = i + 1; j < ps.length; j++) {
            const q = ps[j]
            const ax = p.x - q.x
            const ay = p.y - q.y
            const d = ax * ax + ay * ay
            if (d < 16900) {
              cx.strokeStyle = `rgba(${rgb.current},${0.35 * (1 - d / 16900)})`
              cx.beginPath()
              cx.moveTo(p.x, p.y)
              cx.lineTo(q.x, q.y)
              cx.stroke()
            }
          }
          if (dm < 30000) {
            cx.strokeStyle = `rgba(${rgb.current},${0.5 * (1 - dm / 30000)})`
            cx.beginPath()
            cx.moveTo(p.x, p.y)
            cx.lineTo(mx, my)
            cx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    if (!prefersReducedMotion()) raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas id="cv" ref={ref} aria-hidden="true" />
}
