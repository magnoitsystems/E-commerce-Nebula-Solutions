import styles from './Log.module.css';
import Field from "./Field/Field.tsx";
import LogButton from './Buttons/LogButton.tsx';
import GoogleButton from './Buttons/GoogleButton.tsx';
import { Link } from "react-router-dom";

export default function LogIn() {
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h2>Iniciá sesión</h2>
                <div className={styles.line}></div>
            </div>

            <div className={styles.fields}>
                <Field name={"Email"} type={'email'}/>
                <Field name={"Contraseña"} type={'password'}/>
            </div>

            <div className={styles.log}>
                <LogButton name={"Iniciar sesión"} className={'logButton'}/>
                <p>-------------------------- <span>o</span> --------------------------</p>
                <GoogleButton/>
            </div>

            <div className={styles.logup}>
                <h6>¿Aún no tenés cuenta?</h6>
                <Link to="/logup">
                    <h5><span>Registrarse</span></h5>
                </Link>
            </div>
        </main>
    )
}