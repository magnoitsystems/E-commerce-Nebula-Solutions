import styles from "./PurchaseCard.module.css";

interface PurchaseCardProps {
  image: string;
  status: "Entregado" | "En camino" | "Cancelado";
  date: string;
  orderId: string;
  items: number;
  payment: string;
  price: number;
}

export default function PurchaseCard({
  image,
  status,
  date,
  orderId,
  items,
  payment,
  price,
}: PurchaseCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt="Producto" className={styles.image} />

      <div className={styles.info}>
        <p
          className={`${styles.status} ${
            status === "Entregado"
              ? styles.delivered
              : status === "En camino"
              ? styles.inProgress
              : styles.cancelled
          }`}
        >
          {status}
        </p>
        <p className={styles.date}>
          Llegó el {date} - Pedido {orderId}
        </p>
        <p className={styles.details}>
          {items} artículo <br />
          Pago con {payment}
        </p>
      </div>

      <div className={styles.price}>
        ${price.toLocaleString("es-AR")}
      </div>
    </div>
  );
}
