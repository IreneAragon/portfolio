import styles from './Training.module.scss'
import { Separator } from './Separator'

export function Training () {
    return (
        <section aria-label='Cursos'>
            <article className={styles.shoolContainer}>
                <h4>Desarrollo de Aplicaciones Web (DAW)</h4>
                <small>I.E.S. Aguadulce - 2018/2021</small>
                <p>Contenido relevante del plan de estudios:</p>
                <ul aria-label='Herramientas utilizadas o habilidades adquiridas en esta formación'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>PHP</li>
                    <li>SQL</li>
                    <li>JSON</li>
                    <li>API</li>
                </ul>
            </article>

            <Separator 
                imageSrc='/book-icon.png' 
                headingText='Cursos'
            />

            <article className={styles.shoolContainer}>
                <h4>Máster Front End</h4>
                <small>Lemoncode - 2023</small>
                <p>Contenido relevante del plan de estudios:</p>
                <ul aria-label='Herramientas utilizadas o habilidades adquiridas en esta formación'>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Vuejs</li>
                    <li>Svelte</li>
                    <li>d3js</li>
                    <li>Flexbox</li>
                    <li>Grid</li>
                    <li>Flex</li>
                    <li>Design</li>
                    <li>CSS in JS</li>
                    <li>NextJS</li>
                    <li>Jest</li>
                    <li>GraphQL</li>
                    <li>Webpack</li>
                    <li>Vite</li>
                    <li>Parcel</li>
                    <li>ES6</li>
                    <li>Typescript</li>
                    <li>Git</li>
                </ul>
            </article>

            <article className={styles.shoolContainer}>
                <h4>Máster en CSS</h4>
                <small>Udemy - 2021</small>
                <p>Contenido relevante del plan de estudios:</p>
                <ul aria-label='Herramientas utilizadas o habilidades adquiridas en esta formación'>
                    <li>Maquetación web</li>
                    <li>Responsive Web Design</li>
                    <li>SASS</li>
                    <li>LESS</li>
                    <li>Flexbox</li>
                    <li>CSS Grid</li>
                    <li>Bootstrap</li>
                </ul>
            </article>

            <article className={styles.shoolContainer}>
                <h4>User Experience</h4>
                <small>Accenture - 2020</small>
                <p>Contenido relevante del plan de estudios:</p>
                <ul aria-label='Herramientas utilizadas o habilidades adquiridas en esta formación'>
                    <li>UX basics</li>
                    <li>Persona</li>
                    <li>User testing</li>
                    <li>Uso de wireframes</li>
                    <li>Identificar y desarrollar los escenarios 'design', 'develop' y 'release'</li>
                </ul>
            </article>
        </section>
    )
}