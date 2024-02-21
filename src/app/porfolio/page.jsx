import styles from './page.module.scss'
// import Link from 'next/link'
// import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Irene Aragón | Porfolio',
}

const fetchProjects = () => {
  return fetch(`${process.env.API_URL}/projects.json`)
  .then(res => res.json())
}

export default async function PortfolioPage() {
  const projects = await fetchProjects()
  return (
    <main className={inter.className}>
      <section className={styles.portfolio} aria-label='Proyectos'>
        <h1>Mis proyectos</h1>
        <h2>Estoy trabajando en ello, ¡vuelve pronto!</h2>
        <div className={styles.animation}>
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
          <dotlottie-player src="https://lottie.host/8be2c892-8311-4ab5-8930-4b1ccb8da0ee/MNhapgFuiw.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
        </div>
      </section>
      {/* <section aria-label='Sección de proyectos' className={styles.card}>
        {projects.map(project => (
          <article key={project.id}>
            <div className={styles.cardBody}>
              <Image 
                  src={project.imgurl}
                  width={600}
                  height={3417}
                  alt={'imagen del proyecto ' + project.title}
                  aria-hidden='true'
                  className={styles.image}
              />
              <h2 aria-label={project.title}>{project.title}</h2>
              <p>{project.shortdesc}</p>
              <ul aria-label='Herramientas o skills utilizadas en el proyecto'>
                {project.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <Link href={project.deploylink} className={styles.btn} rel='noopener noreferrer' target='_blank' aria-label={`Enlace al proyecto ${project.title}. Se abrirá en una nueva pestaña.`}> 
                  Ver proyecto
              </Link>
              <Link href={project.repourl} className={styles.btn} rel='noopener noreferrer' target='_blank' aria-label={`Enlace al repositorio ${project.title} en github. Se abrirá en una nueva pestaña.`}> 
                  Ir al repositorio
              </Link>
            </div>
          </article>
        ))}
      </section> */}
    </main>
  )
}