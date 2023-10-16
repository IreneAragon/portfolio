import styles from './Training.module.scss'
import { Separator } from './Separator'

export function Training () {
    return (
        <>
            <section className={styles.shoolContainer}>
                <h4>Desarrollo de Aplicaciones Web (DAW)</h4>
                <small>I.E.S. Aguadulce - 2018/2021</small>
                <p>Contenido relevante del plan de estudios:</p>
                <ul>
                    <li>
                        HTML, CSS, Java, Javascript, JQuery, PHP, SQL, JSON, API
                    </li>
                </ul>
            </section>
            <Separator 
                imageSrc="/book-icon.png" 
                headingText="Cursos"
            />
            <section className={styles.shoolContainer}>
                <h4>Máster Front End</h4>
                <small>Lemoncode - 2023</small>
                <p>Contenido relevante del plan de estudios:</p>
                <ul>
                    <li>
                    React, Angular, Vuejs, Svelte, d3js, Flexbox, CSS Grid, Material Design, CSS in JS
                    NextJS,  Jest, GraphQL, Webpack, Vite, Parcel, ES6, Typescript, Git
                    </li>
                </ul>
            </section>
            <section className={styles.shoolContainer}>
                <h4>Máster en CSS</h4>
                <small>Udemy - 2021</small>
                <p>Contenido relevante del plan de estudios:</p>
                <ul>
                    <li>
                        Maquetación web, Responsive Web Design, SASS, LESS, Flexbox, CSS Grid, Bootstrap 4 y 5 
                    </li>
                </ul>
            </section>
            <section className={styles.shoolContainer}>
                <h4>User Experience</h4>
                <small>Accenture - 2020</small>
                <p>Contenido relevante del plan de estudios:</p>
                <ul>
                    <li>
                        UX basics, identificar y desarrollar los escenarios "design", "develop" y "release", persona, user testing, uso de wireframes
                    </li>
                </ul>
            </section>
        </>
    )
}