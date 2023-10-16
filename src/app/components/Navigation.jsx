import Link from 'next/link'
import Image from 'next/image'
import styles from './Navigation.module.scss'
  
const links = [
    {
        label: 'Sobre mi',
        route: '/'
    }, 
    {
        label: 'Proyectos',
        route: '/porfolio'
    },
]

export function Navigation () {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="http://localhost:3000/">
                    <Image 
                        src="/myLogo.jpg"
                        width={40}
                        height={40}
                        alt="Irene Aragon logo"
                    />
                </Link>
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