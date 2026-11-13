import { asset } from "../utils/asset";
import { SectionTitle } from "./SplitText";

const CHECKS = [
  "Entregas por etapas, sin sorpresas",
  "Código limpio, versionado con Git y documentado",
  "Rendimiento y experiencia móvil primero",
  "Comunicación clara y autoaprendizaje constante",
];

export function About() {
  return (
    <section className="s" id="sobre-mi">
      <div className="c">
        <div>
          <p className="eb">Sobre mí</p>
          <SectionTitle>Entiendo el problema, construyo, entrego.</SectionTitle>
        </div>
        <div className="ab">
          <div className="rv">
            <p className="big">
              Me enfoco en <em>llevar el software a producción</em>, no a una
              maqueta. Combino bases sólidas de ingeniería con IA aplicada para
              crear soluciones que la gente realmente usa.
            </p>
            <ul className="ck">
              {CHECKS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="cd pr rv">
  <div className="badge-ring">
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle className="tr" cx="60" cy="60" r="52" />
      <circle className="fg" cx="60" cy="60" r="52" />
    </svg>
    <div className="logo-in">
      <img src={asset('logo/senati.png')} alt="Logo de SENATI" />
    </div>
  </div>
  <b>Culminada</b>
  <small>FORMACIÓN</small>
  <p>Ingeniería de Software con Inteligencia Artificial · SENATI</p>
</div>
        </div>
      </div>
    </section>
  );
}
