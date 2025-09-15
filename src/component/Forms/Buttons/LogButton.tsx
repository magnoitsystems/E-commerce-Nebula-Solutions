import styles from './Buttons.module.css';

type Props = {
    name: string,
}

export default function LogButton({ name } : Props) {
    return (
        <main className={styles.logButton}>
            <h5>{name}</h5>
        </main>
    )
}