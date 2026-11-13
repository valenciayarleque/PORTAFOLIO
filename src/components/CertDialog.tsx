import { useEffect, useRef } from 'react'
import { Download, X } from 'lucide-react'
import type { Cert } from '../data/portfolio'
import { asset } from '../utils/asset'

interface Props {
  cert: Cert | null
  onClose: () => void
}

export function CertDialog({ cert, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (cert && !d.open) d.showModal()
    if (!cert && d.open) d.close()
  }, [cert])

  const url = cert ? asset(cert.f) : undefined

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="top">
        <b>{cert?.t}</b>
        <div className="flex gap-2">
          <a className="btn" href={url} download style={{ padding: '.4rem .9rem', minHeight: '2.5rem' }}>
            <Download size={16} aria-hidden="true" /> Descargar
          </a>
          <button className="ic" type="button" onClick={onClose} aria-label="Cerrar">
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <iframe src={url ?? 'about:blank'} title="Vista previa del certificado" />
    </dialog>
  )
}
