import styles from './Footer.module.scss'

export function Footer () {
    return (
        <footer className={styles.footer}>
           <p>Developed by <a href="https://www.linkedin.com/in/irene-aragon/" target="_blank" rel="noopener noreferrer" aria-label='Enlace a página Linkedin. Se abrirá en una nueva pestaña'>Irene Aragón</a></p>
        </footer>
    )
}