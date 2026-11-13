import { useCallback, useLayoutEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

function readInitial(): Theme {
  try {
    return localStorage.getItem('th4') === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitial)

  // useLayoutEffect: el atributo se aplica antes que cualquier otro efecto (p. ej. el color de partículas)
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('th4', theme)
    } catch {
      /* almacenamiento no disponible */
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return { theme, toggle }
}
