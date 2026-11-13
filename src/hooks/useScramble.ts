import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../utils/media'

const CHARS = '!<>-_\\/[]{}—=+*^?#01'

/** Texto con efecto de "descifrado" que rota entre frases. */
export function useScramble(phrases: string[]): string {
  const [text, setText] = useState(phrases[0] ?? '')

  useEffect(() => {
    if (prefersReducedMotion() || phrases.length === 0) {
      setText(phrases[0] ?? '')
      return
    }
    let alive = true
    let timer = 0
    let idx = 0

    const run = () => {
      const target = phrases[idx]
      const steps = 22
      let frame = 0
      const step = () => {
        if (!alive) return
        let out = ''
        for (let i = 0; i < target.length; i++) {
          if (i < (target.length * frame) / steps) out += target[i]
          else out += target[i] === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]
        }
        setText(out)
        if (frame++ < steps) {
          timer = window.setTimeout(step, 32)
        } else {
          setText(target)
          idx = (idx + 1) % phrases.length
          timer = window.setTimeout(run, 2200)
        }
      }
      step()
    }
    run()

    return () => {
      alive = false
      window.clearTimeout(timer)
    }
  }, [phrases])

  return text
}
