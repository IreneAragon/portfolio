import Image from 'next/image'
import styles from './Separator.module.scss'

export function Separator (props) {
    const { imageSrc, headingText } = props
    return (
        <section className={styles.section}>
            <span className={styles.line}></span>
            <div className={styles.stepInfoContainer}>
                <div className={styles.stepInfo}>
                    <Image 
                        src={imageSrc}
                        width={20}
                        height={20}
                        alt="Icono de source code"
                    />
                </div>
                <h3>{headingText}</h3>
            </div>
        </section>
    )
}