import styles from "./PurchaseCard.module.css";

interface PurchaseCardProps {
  image: string;
  status: string;
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
    <p className={styles.status}>{status}</p>
    <p className={styles.date}>Llegó el {date} - Pedido {orderId}</p>
    <p className={styles.details}>
      {items} artículo <br />
      Pago con {payment}
    </p>
  </div>

  <span className={styles.price}>
    ${price.toLocaleString("es-AR")},00
  </span>
</div>

  );
}
