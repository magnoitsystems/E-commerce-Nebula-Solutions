import styles from './Buttons.module.css';

export default function GoogleButton() {
    return (
        <main className={styles.googleButton}>
            <img src={"/icons/google.png"} alt={"Google Icon"}/>
            <h5>Continuar con Google</h5>
        </main>
    )
}