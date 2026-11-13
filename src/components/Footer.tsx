import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer>
      <div className="c">
        <span>© {new Date().getFullYear()} Jhon VY · Todos los derechos reservados</span>
        <a href="#inicio" className="inline-flex items-center gap-1 text-inherit">
          <ArrowUp size={16} aria-hidden="true" /> Volver arriba
        </a>
      </div>
    </footer>
  )
}
