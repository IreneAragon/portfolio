import styles from './page.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Irene Aragón | Porfolio',
}

export default async function PortfolioPage() {
  const projects = await fetchProjects()
  return (
    <main className={inter.className}>
      <section className={styles.portfolio} aria-label='Proyectos'>
        <h1>Mis proyectos</h1>
        <h2>Estoy trabajando en ello, ¡vuelve pronto!</h2>
      </section>
    </main>
  )
}