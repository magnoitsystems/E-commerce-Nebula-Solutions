import styles from './Log.module.css';
import Field from "./Field/Field.tsx";
import LogButton from './Buttons/LogButton.tsx';
import GoogleButton from './Buttons/GoogleButton.tsx';

export default function LogIn() {
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h2>Iniciá sesión</h2>
                <div className={styles.line}></div>
            </div>

            <div className={styles.fields}>
                <Field/>
                <Field/>
            </div>

            <div className={styles.log}>
                <LogButton/>
                <p>-------------------------- <span>o</span> --------------------------</p>
                <GoogleButton/>
            </div>

            <div className={styles.logup}>
                <h6>¿Aún no tenés cuenta?</h6>
                <h5><span>Registrate</span></h5>
            </div>
        </main>
    )
}