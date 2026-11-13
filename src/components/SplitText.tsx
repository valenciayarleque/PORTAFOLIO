import { Fragment } from 'react'
import type { CSSVars } from '../types'

/** Divide un texto en letras animadas (efecto del nombre del hero). */
export function SplitChars({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <>
      {Array.from(text).map((c, i) => (
        <span key={i} className="ch" style={{ '--i': i + offset } as CSSVars}>
          {c === ' ' ? '\u00a0' : c}
        </span>
      ))}
    </>
  )
}

/** Título h2 que revela palabra por palabra al entrar en pantalla. */
export function SectionTitle({ children }: { children: string }) {
  return (
    <h2>
      {children.split(' ').map((w, i) => (
        <Fragment key={i}>
          <span className="w">
            <span style={{ '--i': i } as CSSVars}>{w}</span>
          </span>{' '}
        </Fragment>
      ))}
    </h2>
  )
}
