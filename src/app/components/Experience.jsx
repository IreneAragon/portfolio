import Image from 'next/image'
import styles from './Experience.module.scss'

export function Experience () {
    return (
        <section className={styles.section} aria-label='Experiencia laboral'>
            <article className={styles.companyContainer}>
                <div className={styles.companyHeader}>
                    <Image 
                        src='/boycor-company.jpg'
                        width={50}
                        height={50}
                        alt='Logo de Boycor'
                        className={styles.image}
                    />
                    <div className={styles.company}>
                        <div>
                            <h4>Boycor</h4> 
                            <small>(3 meses)</small>
                        </div>
                        <small>Octubre 2023 - Enero 2024 </small>
                    </div>
                </div>

                <div className={styles.companyBody}>
                    <div>
                        <p>Desarrolladora Frontend para VASS con proyecto Bankinter.</p>
                        <ul className={styles.list} aria-label='Trabajos realizados o habilidades adquiridas en este empleo'>
                            <li>Maquetación de componentes, desde un diseño dado.</li>
                            <li>Programación necesaria para funcionalidades.</li>
                            <li>Comprobación de la correcta visualización en distintos navegadores y resoluciones.</li>
                            <li>Aplicar buenas prácticas de accesibilidad.</li>
                            <li>Documentación de estilos para la librería de componentes.</li>
                        </ul>
                    </div>
                    <div className={styles.toolsContainer}>
                        <p>Herramientas:</p>
                        <ul aria-label='Herramientas o skills utilizadas en este empleo'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>BEM</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>GIT</li>
                            <li>JIRA</li>
                            <li>Jenkins</li>
                            <li>JFrog</li>
                            <li>Invision</li>
                            <li>Figma</li>
                            <li>Documentación</li>
                        </ul>
                    </div>
                </div>
            </article> 
            <article className={styles.companyContainer}>
                <div className={styles.companyHeader}>
                    <Image 
                        src='/BS-company.jpg'
                        width={50}
                        height={50}
                        alt='Logo de BeSoccer'
                        className={styles.image}
                    />
                    <div className={styles.company}>
                        <div>
                            <h4>BeSoccer</h4> 
                            <small>(6 meses)</small>
                        </div>
                        <small>Octubre 2022 - Marzo 2023 </small>
                    </div>
                </div>

                <div className={styles.companyBody}>
                    <div>
                        <p>Desarrolladora Frontend.</p>
                        <ul className={styles.list} aria-label='Trabajos realizados o habilidades adquiridas en este empleo'>
                            <li>Creación de páginas web desde cero.</li>
                            <li>Maquetación "pixel perfect" desde un diseño dado o libre sin ningún tipo de guía de estilos.</li>
                            <li>Programación necesaria para funcionalidades.</li>
                            <li>Comprobación de la correcta visualización en distintos navegadores y resoluciones.</li>
                            <li>Modificación o creación de nuevas funcionalidades o secciones en proyectos ya creados.</li>
                        </ul>
                    </div>
                    <div className={styles.toolsContainer}>
                        <p>Herramientas:</p>
                        <ul aria-label='Herramientas o skills utilizadas en este empleo'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>LESS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>Jquery</li>
                            <li>Ajax</li>
                            <li>API</li>
                            <li>GIT</li>
                            <li>Docker</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                </div>
            </article>
            <article className={styles.companyContainer}>
                <div className={styles.companyHeader}>
                    <Image 
                        src='/wom-company.png'
                        width={50}
                        height={50}
                        alt='Logo de Wom marketing'
                        className={styles.image}
                    />
                    <div className={styles.company}>
                        <div>
                            <h4>Wom</h4> 
                            <small>(1 año y 3 meses)</small>
                        </div>
                        <small>Julio 2021 - Septiembre 2022 </small>
                    </div>
                </div>

                <div className={styles.companyBody}>
                    <div>
                        <p>Diseño web, maquetación, programación y mantenimiento web.</p>
                        <ul className={styles.list} aria-label='Trabajos realizados o habilidades adquiridas en este empleo'>
                            <li>Desarrollo web a medida.</li>
                            <li>Maquetación con o sin prototipado.</li>
                            <li>Mantenimiento web y control de servidores.</li>
                            <li>Soporte técnico a clientes.</li>
                            <li>Comprobación de la correcta visualización en distintos navegadores y resoluciones.</li>
                        </ul>
                    </div>
                    <div className={styles.toolsContainer}>
                        <p>Herramientas:</p>
                        <ul aria-label='Herramientas o skills utilizadas en este empleo'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Jquery</li>
                            <li>PHP</li>
                            <li>Wordpress</li>
                            <li>Shopify</li>
                        </ul>
                    </div>
                </div>
            </article> 
            <article className={styles.companyContainer}>
                <div className={styles.companyHeader}>
                    <Image 
                        src='/OP-company.png'
                        width={50}
                        height={50} 
                        alt='Logo de Oferplay'
                        className={styles.image}
                    />
                    <div className={styles.company}>
                        <div>
                            <h4>Oferplay</h4> 
                            <small>(Prácticas - 3 meses)</small>
                        </div>
                        <small>Diciembre 2020 - Marzo 2021 </small>
                    </div>
                </div>

                <div className={styles.companyBody}>
                    <div>
                        <p>Diseño, desarrollo y mantenimiento web.</p>
                        <ul className={styles.list} aria-label='Trabajos realizados o habilidades adquiridas en este empleo'>
                            <li>Creación de páginas web desde cero.</li>
                            <li>Maquetación.</li>
                            <li>Programación necesaria para funcionalidades.</li>
                            <li>Comprobación de la correcta visualización en distintos navegadores y resoluciones.</li>
                            <li>Modificación o creación de nuevas funcionalidades o secciones en proyectos ya creados.</li>
                        </ul>
                    </div>
                    <div>
                        <p>Herramientas:</p>
                        <ul aria-label='Herramientas o skills utilizadas en este empleo'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>Jquery</li>
                            <li>Ajax</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                </div>
            </article> 
        </section>   
    )
}