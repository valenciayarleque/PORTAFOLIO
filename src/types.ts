import type { CSSProperties } from 'react'

/** Permite pasar variables CSS (--i, --w, --t...) en el prop style con tipado estricto. */
export type CSSVars = CSSProperties & { [key: `--${string}`]: string | number }
