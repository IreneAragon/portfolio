import { Presentation } from './components/Presentation'
import { Separator } from './components/Separator'
import { Tools } from './components/Tools'
import { Experience } from './components/Experience'
import { Training } from './components/Training'

export const metadata = {
  title: 'Irene Aragón | Front end developer',
  description: 'Front end developer',
}

export default function HomePage() {
  return (
    <main>
      <Presentation />
      <Separator 
        imageSrc="/source-code-icon.png" 
        headingText="Herramientas"
      />
      <Tools />
      <Separator 
        imageSrc="/work-icon.png" 
        headingText="Experiencia laboral"
      />
      <Experience />
      <Separator 
        imageSrc="/school-icon.png" 
        headingText="Formación Reglada"
      />
      <Training />
    </main>
  )
}
 