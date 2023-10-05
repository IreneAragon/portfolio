import Link from 'next/link'
import Image from 'next/image'
import styles from './Navigation.module.scss'
  
const links = [
    {
        label: 'Home',
        route: '/'
    }, 
    {
        label: 'Porfolio',
        route: '/porfolio'
    }, 
    {
        label: 'Contacto',
        route: '/contacto'
    }
]

export function Navigation () {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Image 
                    src="/myLogo.jpg"
                    width={40}
                    height={40}
                    alt="Irene Aragon logo"
                />
                <ul>
                    {links.map(({ label, route }) => (
                        <li key={route} className={styles.li}>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}