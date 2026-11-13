import { useCallback } from 'react'
import { About } from './components/About'
import { Certificates } from './components/Certificates'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Loader } from './components/Loader'
import { RoleMarquee, StackMarquee } from './components/Marquees'
import { ParticlesCanvas } from './components/ParticlesCanvas'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Services } from './components/Services'
import { Stack } from './components/Stack'
import { WhatsAppButton } from './components/WhatsAppButton'
import { useHoverEffects } from './hooks/useHoverEffects'
import { useProfilePhoto } from './hooks/useProfilePhoto'
import { useReveal } from './hooks/useReveal'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggle } = useTheme()
  const photo = useProfilePhoto()

  useReveal()
  useHoverEffects()

  // Cuando termina la barra de carga se libera el scroll y arrancan las animaciones del hero
  const onLoaderStart = useCallback(() => {
    document.body.classList.remove('ld')
    document.body.classList.add('go')
  }, [])

  return (
    <>
      <Loader onStart={onLoaderStart} />
      <ParticlesCanvas theme={theme} />
      <ScrollProgress />
      <Cursor />
      <Header onToggleTheme={toggle} />

      <main>
        <Hero photo={photo} />
        <RoleMarquee />
        <About />
        <Services />
        <Projects />
        <StackMarquee />
        <Stack />
        <Certificates />
        <Contact photo={photo} />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
