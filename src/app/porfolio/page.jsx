import Link from "next/link"

export const metadata = {
  title: 'Irene Aragón | Portfolio',
}

const fetchProjects = () => {
  return fetch(`${process.env.API_URL}/projects.json`)
  .then(res => res.json())
}

export default async function PortfolioPage() {
  const projects = await fetchProjects()
  return (
    <section>
      {projects.map(project => (
          <article key={project.id}>
            <Link href='/porfolio/[id]' as={`/porfolio/${project.id}`}>
              <h2>{project.title}</h2>
              <p>{project.shortdesc}</p>
            </Link>
          </article>
      ))}
    </section>
  )
}