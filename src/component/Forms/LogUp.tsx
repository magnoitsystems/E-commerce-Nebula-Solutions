import styles from './Log.module.css';
import Field from "./Field/Field.tsx";
import LogButton from "./Buttons/LogButton.tsx";

export default function LogUp() {
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h2>Registrate</h2>
                <div className={styles.line}></div>
            </div>

            <div className={styles.fields}>
                <div className={styles.firstStep}>
                    <Field name={"Nombre"}/>
                    <Field name={"Apellido"}/>
                    <Field name={"DNI"}/>
                </div>
                <div className={styles.secondStep}>
                    <Field name={"Email"}/>
                    <Field name={"Contraseña"}/>
                    <Field name={"Confirmar contraseña"}/>
                </div>
            </div>

            <div className={styles.log}>
                <LogButton name={"Registrarse"}/>
            </div>

            <div className={styles.logup}>
                <h6>¿Ya tenés una cuenta?</h6>
                <h5><span>Iniciá sesión</span></h5>
            </div>
        </main>
    )
}