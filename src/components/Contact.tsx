import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Check,
  Copy,
  Download,
  Globe,
  Handshake,
  Mail,
  Smile,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CFG, CONTACT_TOPICS } from "../data/portfolio";
import { asset } from "../utils/asset";
import { ProfileInner } from "./ProfileInner";

// Icono y frase corta para cada tema (mismo orden que CONTACT_TOPICS)
const TOPIC_META: { Icon: LucideIcon; hint: string }[] = [
  { Icon: Briefcase, hint: "Cuéntame sobre el puesto" },
  { Icon: Globe, hint: "Web, panel o sistema a medida" },
  { Icon: Handshake, hint: "Proyectos por encargo" },
  { Icon: Smile, hint: "Sin compromiso" },
];

export function Contact({ photo }: { photo: string | null }) {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState("");
  const timer = useRef(0);
  const mail = `mailto:${CFG.email}`;

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      if (!navigator.clipboard) throw new Error("clipboard no disponible");
      await navigator.clipboard.writeText(CFG.email);
      setCopied(true);
      setFeedback("");
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setFeedback("Copia manualmente el correo");
    }
  };

  const socials = [
    { badge: "GH", name: "GitHub", sub: "Ver mi código", href: CFG.github },
    { badge: "in", name: "LinkedIn", sub: "Conectemos", href: CFG.linkedin },
  ].filter((s) => s.href);

  return (
    <section className="s" id="contacto">
      <div className="ct-glow" aria-hidden="true" />
      <div className="c cw">
        <div className="rv">
          <p className="eb">Contacto</p>
          <span className="hb gt">¿Hablamos?</span>
          <p className="sub m-0">
            Estoy disponible para incorporarme a tu equipo o desarrollar tu
            idea. Cuéntame qué necesitas y te respondo en menos de 24 horas.
          </p>
        </div>

        <div className="ct-grid">
          <div className="cd ct-main tl rv">
            <small className="ct-label">01 · ¿Sobre qué quieres hablar?</small>
            <div className="ct-topics">
              {CONTACT_TOPICS.map((t, i) => {
                const { Icon, hint } = TOPIC_META[i] ?? TOPIC_META[0];
                return (
                  <a
                    key={t.label}
                    className="ct-topic"
                    href={`mailto:${CFG.email}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(t.body)}`}
                  >
                    <span className="ct-ico">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span>
                      <b>{t.label}</b>
                      <em>{hint}</em>
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <small className="ct-label">02 · O escríbeme directo</small>
            <a className="ct-mail" href={mail}>
              <Mail size={26} aria-hidden="true" />
              <span>{CFG.email}</span>
              <ArrowUpRight size={24} aria-hidden="true" />
            </a>

            <div className="btns">
              <a className="btn p mg" href={mail}>
                <Mail size={18} aria-hidden="true" /> Escribir correo
              </a>
              <button
                className={`btn mg${copied ? " ok" : ""}`}
                type="button"
                onClick={copy}
              >
                {copied ? (
                  <>
                    <Check size={18} aria-hidden="true" /> Copiado
                  </>
                ) : (
                  <>
                    <Copy size={18} aria-hidden="true" /> Copiar correo
                  </>
                )}
              </button>
              <a
                className="btn mg"
                href={CFG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <span
                role="status"
                aria-live="polite"
                className="font-bold text-accent"
              >
                {feedback}
              </span>
            </div>
          </div>

          <aside className="cd pcd ct-side tl rv">
            <div className="pav">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <defs>
                  <path
                    id="cp2"
                    d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0"
                  />
                </defs>
                <text>
                  <textPath href="#cp2" textLength={548} lengthAdjust="spacing">
                    {
                      "DISPONIBLE • EMPLEO • FREELANCE • DISPONIBLE • EMPLEO • FREELANCE • "
                    }
                  </textPath>
                </text>
              </svg>
              <div className="pi">
                <ProfileInner photo={photo} />
              </div>
            </div>
            <h3>Jhon VY</h3>
            <p>Egresado de Ing. de Software con IA</p>
            <span className="pill">
              <b />
              Disponible para empleo y freelance
            </span>

            <div className="ct-stats">
              <div className="ct-stat">
                <b>&lt; 24 h</b>
                <span>Respuesta</span>
              </div>
              <div className="ct-stat">
                <b>Empleo · Freelance</b>
                <span>Modalidad</span>
              </div>
            </div>

            <div className="qa">
              <a
                className="btn mg"
                href={asset("cv/CV-Jhon-VY.pdf")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} aria-hidden="true" /> Descargar CV
              </a>
            </div>
          </aside>
        </div>

        <div className="cm">
          {socials.map((s) => (
            <a
              key={s.name}
              className="cd cmi tl rv in"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ico">{s.badge}</span>
              <span>
                <b>{s.name}</b>
                <small>{s.sub}</small>
              </span>
              <i aria-hidden="true">
                <ArrowUpRight size={22} />
              </i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
