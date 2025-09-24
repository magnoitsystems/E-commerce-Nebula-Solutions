import { useState } from "react";
import styles from './Log.module.css';
import Field from "./Field/Field";
import LogButton from "./Buttons/LogButton";
import { Link } from "@inertiajs/react";

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
                        <Field name={"Nombre"} type={'text'} className={'inputGroup'}/>
                        <Field name={"Apellido"} type={'text'} className={'inputGroup'}/>
                        <Field name={"DNI"} type={'number'} className={'inputGroup'}/>
                        <LogButton name={"Siguiente"} onClick={nextStep} className={'logButton'}/>
                    </div>
                )}

                {step === 2 && (
                    <div className={styles.secondStep}>
                        <Field name={"Email"} type={'email'} className={'inputGroup'}/>
                        <Field name={"Contraseña"} type={'password'} className={'inputGroup'}/>
                        <Field name={"Confirmar contraseña"} type={'password'} className={'inputGroup'}/>
                        <div className={styles.buttons}>
                            <LogButton name={"Atrás"} onClick={prevStep} className={'alternativeButton'} />
                            <LogButton name={"Registrarse"} className={'logButton'} />
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.logup}>
                <h6>¿Ya tenés una cuenta?</h6>
                <Link href="/login">
                    <h5><span>Iniciar sesión</span></h5>
                </Link>
            </div>
        </main>
    );
}
