export const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const canHover = (): boolean => window.matchMedia('(hover: hover)').matches
