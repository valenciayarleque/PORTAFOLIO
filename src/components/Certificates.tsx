import { useState } from 'react'
import { Download, Eye, Star } from 'lucide-react'
import { CERTS } from '../data/portfolio'
import type { Cert } from '../data/portfolio'
import { asset } from '../utils/asset'
import { CertDialog } from './CertDialog'
import { SectionTitle } from './SplitText'

export function Certificates() {
  const [selected, setSelected] = useState<Cert | null>(null)

  return (
    <section className="s" id="certificados">
      <div className="c">
        <div>
          <p className="eb">Certificados</p>
          <SectionTitle>Formación verificable.</SectionTitle>
          <p className="sub rv">Visualiza cada certificado o descárgalo en PDF.</p>
        </div>
        <div className="cards">
          {CERTS.map((c) => (
            <article key={c.f} className="cd tl cert rv">
              <div className="ico">
                <Star size={22} aria-hidden="true" />
              </div>
              <h3>{c.t}</h3>
              <p>{c.o}</p>
              <p className="meta">{c.y}</p>
              <div className="act">
                <button className="btn" type="button" onClick={() => setSelected(c)}>
                  <Eye size={18} aria-hidden="true" /> Ver
                </button>
                <a className="btn" href={asset(c.f)} download>
                  <Download size={18} aria-hidden="true" /> PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <CertDialog cert={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
