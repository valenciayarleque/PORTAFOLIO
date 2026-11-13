import { useEffect, useState } from 'react'
import { CFG } from '../data/portfolio'
import { asset } from '../utils/asset'

/** Busca la foto de perfil (foto.jpg, .jpeg, .png, .webp) dentro de /public. Devuelve la URL o null. */
export function useProfilePhoto(): string | null {
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    document.documentElement.style.setProperty('--fp', CFG.fotoPos || 'center 22%')
    const candidates = [CFG.foto, 'foto.jpg', 'foto.jpeg', 'foto.png', 'foto.webp', 'img/foto.jpg', 'assets/foto.jpg']
      .filter((v, i, a) => v && a.indexOf(v) === i)
      .map(asset)

    let cancelled = false
    const tryAt = (i: number) => {
      if (cancelled || i >= candidates.length) return
      const img = new Image()
      img.onload = () => {
        if (!cancelled) setSrc(candidates[i])
      }
      img.onerror = () => tryAt(i + 1)
      img.src = candidates[i]
    }
    tryAt(0)
    return () => {
      cancelled = true
    }
  }, [])

  return src
}
