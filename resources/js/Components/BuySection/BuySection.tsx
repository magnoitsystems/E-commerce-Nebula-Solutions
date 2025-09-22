import { useState } from "react";
import styles from './BuySection.module.css';
import PaymentBar from './PaymentBar/PaymentBar';
import BuyButton from "./BuyButtons/BuyButtons";
import Field from "../Forms/Field/Field";

type Props = {
    productsQuantity: number,
    shipments: number,
    price: number,
}

export default function BuySection({ productsQuantity, shipments, price }: Props) {
    const [paymentMethod, setPaymentMethod] = useState<string>("efectivo")
    const [step, setStep] = useState<"summary" | "payment">("summary");

    return (
        <main className={styles.main}>
            <PaymentBar setPaymentMethod={setPaymentMethod} selected={paymentMethod}/>

            {step === "summary" && (
                <>
                    <div className={styles.buySummery}>
                        <div className={styles.details}>
                            <h3>Resumen de compra</h3>
                            <h4>Productos ({productsQuantity})</h4>
                            <h4>Envíos ({shipments})</h4>
                        </div>

                        <div className={styles.price}>
                            <h3>Total</h3>
                            <h2>${price},00</h2>
                        </div>
                    </div>

                    <div className={styles.buySummery}><h5>Método de pago seleccionado: {paymentMethod}</h5></div>

                    <div className={styles.buttons}>
                        <BuyButton
                            text={'Continuar compra'}
                            className={'primaryButton'}
                            onClick={() => setStep("payment")}
                        />
                        <BuyButton text={'Seguir buscando'} className={'secondaryButton'}/>
                    </div>
                </>
            )}

            {step === "payment" && (
                <div className={styles.paymentDetails}>
                    {paymentMethod === "efectivo" && (
                        <div className={styles.cashPayment}>
                            <div>
                                <h3>Punto de retiro</h3>
                                <h4>Av. Siempre Viva 123, Springfield</h4>
                            </div>

                            <div className={styles.price}>
                                <h3>Total</h3>
                                <h2>${price},00</h2>
                            </div>
                        </div>
                    )}

                    {paymentMethod === "credito" && (
                        <div className={styles.creditPayment}>
                            <div><h3>Ingrese los datos de la tarjeta</h3></div>

                            <div>
                                <Field type={"text"} name={'Número de tarjeta'} className={'darkInputGroup'}/>
                                <Field type={"text"} name={'Vencimiento (MM/AA)'} className={'darkInputGroup'}/>
                                <Field type={"text"} name={"Titular"} className={'darkInputGroup'}/>
                                <Field type={"password"} name={"Código de seguridad"} className={'darkInputGroup'}/>
                                <Field type={"number"} name={"Cantidad de cuotas"} className={'darkInputGroup'}/>
                            </div>

                            <div className={styles.price}>
                                <h3>Total</h3>
                                <h2>${price},00</h2>
                            </div>
                        </div>
                    )}

                    {paymentMethod === "debito" && (
                        <div className={styles.creditPayment}>
                            <div><h3>Ingrese los datos de la tarjeta</h3></div>

                            <div>
                                <Field type={"text"} name={'Número de tarjeta'} className={'darkInputGroup'}/>
                                <Field type={"text"} name={'Vencimiento (MM/AA)'} className={'darkInputGroup'}/>
                                <Field type={"text"} name={"Titular"} className={'darkInputGroup'}/>
                                <Field type={"number"} name={"Cantidad de cuotas"} className={'darkInputGroup'}/>
                            </div>

                            <div className={styles.price}>
                                <h3>Total</h3>
                                <h2>${price},00</h2>
                            </div>
                        </div>
                    )}

                    <div className={styles.buttons}>
                        <BuyButton text={'Confirmar compra'} className={'primaryButton'}/>
                        <BuyButton
                            text={'Volver atrás'}
                            className={'secondaryButton'}
                            onClick={() => setStep("summary")}
                        />
                    </div>
                </div>
            )}
        </main>
    )
}
