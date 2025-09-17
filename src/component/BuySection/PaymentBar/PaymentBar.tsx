import styles from '../BuySection.module.css'

type Props = {
    setPaymentMethod: (method: string) => void,
    selected: string | null,
}

export default function PaymentBar({ setPaymentMethod, selected }: Props) {
    return (
        <main className={styles.paymentBar}>
            <div
                className={`${styles.option} ${selected === "efectivo" ? styles.active : ""}`}
                onClick={() => setPaymentMethod("efectivo")}
            >
                <h3>Efectivo</h3>
            </div>

            <div
                className={`${styles.option} ${selected === "debito" ? styles.active : ""}`}
                onClick={() => setPaymentMethod("debito")}
            >
                <h3>Débito</h3>
            </div>

            <div
                className={`${styles.option} ${selected === "credito" ? styles.active : ""}`}
                onClick={() => setPaymentMethod("credito")}
            >
                <h3>Crédito</h3>
            </div>
        </main>
    )
}
