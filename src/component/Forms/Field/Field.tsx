import styles from './Field.module.css';

type Props = {
    name: string;
}

export default function Field({ name }: Props) {
    return (
        <main className={styles.main}>
            <h6>{name}</h6>
            <div className={styles.content}>
                <h6>{name}</h6>
            </div>
        </main>
    )
}