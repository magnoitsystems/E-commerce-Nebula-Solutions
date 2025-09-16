import { useState } from "react";
import styles from './Log.module.css';
import Field from "./Field/Field.tsx";
import LogButton from "./Buttons/LogButton.tsx";
import { Link } from "react-router-dom";

export default function LogUp() {
    const [step, setStep] = useState(1); // 1 = datos personales, 2 = cuenta

    const nextStep = () => setStep(2);
    const prevStep = () => setStep(1);

    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h2>Registrate</h2>
                <div className={styles.line}></div>
            </div>

            <div className={styles.fields}>
                {step === 1 && (
                    <div className={styles.firstStep}>
                        <Field name={"Nombre"} type={'text'}/>
                        <Field name={"Apellido"} type={'text'}/>
                        <Field name={"DNI"} type={'number'}/>
                        <LogButton name={"Siguiente"} onClick={nextStep} className={'logButton'}/>
                    </div>
                )}

                {step === 2 && (
                    <div className={styles.secondStep}>
                        <Field name={"Email"} type={'email'}/>
                        <Field name={"Contraseña"} type={'password'}/>
                        <Field name={"Confirmar contraseña"} type={'password'}/>
                        <div className={styles.buttons}>
                            <LogButton name={"Atrás"} onClick={prevStep} className={'alternativeButton'} />
                            <LogButton name={"Registrarse"} className={'logButton'} />
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.logup}>
                <h6>¿Ya tenés una cuenta?</h6>
                <Link to="/login">
                    <h5><span>Iniciar sesión</span></h5>
                </Link>
            </div>
        </main>
    );
}
