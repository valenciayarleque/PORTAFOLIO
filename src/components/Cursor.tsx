import { useEffect, useRef } from 'react'
import { canHover, prefersReducedMotion } from '../utils/media'

export function Cursor() {
  const ring = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cu = ring.current
    const cd = dot.current
    if (!cu || !cd || !canHover() || prefersReducedMotion()) return

    let x = 0
    let y = 0
    let tx = 0
    let ty = 0
    let raf = 0

    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      cu.style.opacity = '1'
      cd.style.opacity = '1'
      cd.style.transform = `translate(${tx}px,${ty}px)`
    }
    const onOver = (e: PointerEvent) => {
      const t = e.target
      cu.classList.toggle('h', t instanceof Element && !!t.closest('a,button'))
    }
    const loop = () => {
      x += (tx - x) * 0.17
      y += (ty - y) * 0.17
      cu.style.transform = `translate(${x}px,${y}px)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerover', onOver)
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
    }
  }, [])

  return (
    <>
      <div id="cu" ref={ring} />
      <div id="cd" ref={dot} />
    </>
  )
}
