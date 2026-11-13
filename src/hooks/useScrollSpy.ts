import { useEffect, useState } from 'react'

/** Devuelve el id de la sección visible en el centro de la pantalla. */
export function useScrollSpy(): string {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('main section[id]').forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])
  return active
}
