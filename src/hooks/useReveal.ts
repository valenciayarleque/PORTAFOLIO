import { useEffect } from 'react'

/** Aparición al hacer scroll: añade la clase "in" a .rv y h2 con retraso escalonado. */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    document.querySelectorAll<HTMLElement>('.rv, h2').forEach((el) => {
      if (el.classList.contains('rv')) {
        const i = Array.from(el.parentElement?.children ?? []).indexOf(el)
        el.style.transitionDelay = `${(i % 4) * 90}ms`
      }
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])
}
