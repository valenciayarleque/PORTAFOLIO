/* ===== EDITA AQUÍ TUS DATOS ===== */

export interface SiteConfig {
  foto: string
  fotoPos: string
  email: string
  whatsapp: string
  github: string
  linkedin: string
  roles: string[]
}

export interface Cert {
  t: string
  o: string
  y: string
  f: string
}

export interface Project {
  t: string
  d: string
  s: string[]
  u: string
  img?: string 
}

export interface ContactTopic {
  label: string
  subject: string
  body: string
}

export const CFG: SiteConfig = {
  foto: 'foto.jpg',
  fotoPos: 'center 22%',
  email: 'franklinvalenciayarleque@gmail.com',
  whatsapp: 'https://wa.me/51929425988',
  github: '',
  linkedin: '',
  roles: [
    'Egresado de Ing. de Software con IA',
    'Desarrollador Full Stack',
    'Automatización con IA',
    'Sistemas a medida',
  ],
}

export const NAV_LINKS: { id: string; label: string }[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'stack', label: 'Stack' },
  { id: 'certificados', label: 'Certificados' },
  { id: 'contacto', label: 'Contacto' },
]

export const CERTS: Cert[] = [
  { t: 'Get_Connected', o: 'Cisco', y: '2023', f: 'certificados/Get_Connected.pdf' },
  { t: 'Introduction_to_IoT', o: 'Cisco', y: '2023', f: 'certificados/Introduction_to_IoT.pdf' },
]

export const PROJ: Project[] = [
   {
    t: 'Sistema de asistencia',
    d: 'Mantener historial y record de asistencia de alumnos, docentes y personal administrativo de una institución educativa, de manera automatizada y eficiente.',
    s: ['React', 'Node.js', 'PostgreSQL'],
    u: '',
    img: 'proyectos/sistema_asistencia.png',
  },
  {
    t: 'Sistema de trazabilidad',
    d: 'Permitir el seguimiento y control de productos hidrobiológicos, desde su origen hasta su destino final, garantizando la transparencia y la calidad del proceso.',
    s: ['React', 'Node.js', 'PostgreSQL'],
    u: '',
    img: 'proyectos/sistema_trazabilidad.png',
  },
]

export const STACK: Record<string, string[]> = {
  Frontend: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Responsive / Accesibilidad'],
  Backend: ['Node.js', 'Express', 'Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'REST APIs', 'JWT / Autenticación'],
  Datos: ['MySQL', 'MongoDB', 'SQL'],
  IA: ['Claude', 'Codex', 'Integración de LLMs (APIs)', 'Prompt engineering', 'Automatización con n8n', 'RAG básico'],
  'Despliegue y Cloud': ['Docker', 'Vercel', 'Sentry', 'Microsoft Azure', 'Render'],
  Herramientas: ['Git & GitHub', 'Linux', 'Postman', 'Figma'],
  'Soft skills': ['Comunicación', 'Resolución de problemas', 'Trabajo en equipo', 'Autoaprendizaje', 'Gestión del tiempo'],
  'Office y TI': ['Power BI', 'Word', 'Excel', 'PowerPoint', 'Google Workspace', 'Redes básicas', 'Soporte técnico', 'Seguridad básica'],
}

export const CONTACT_TOPICS: ContactTopic[] = [
  { label: 'Tengo una vacante', subject: 'Vacante para Jhon VY', body: 'Hola Jhon, tenemos una vacante y me gustaría conversar contigo.' },
  { label: 'Quiero un sitio web o sistema', subject: 'Proyecto de desarrollo', body: 'Hola Jhon, necesito un sitio web o sistema y me gustaría conversar sobre el proyecto.' },
  { label: 'Colaboración freelance', subject: 'Colaboración freelance', body: 'Hola Jhon, me interesa una colaboración freelance contigo.' },
  { label: 'Solo quiero saludar', subject: 'Hola desde tu portafolio', body: 'Hola Jhon, vi tu portafolio y quería saludarte.' },
]

export const ROLE_WORDS = ['Full Stack', 'IA aplicada', 'Automatización', 'Sistemas a medida']
