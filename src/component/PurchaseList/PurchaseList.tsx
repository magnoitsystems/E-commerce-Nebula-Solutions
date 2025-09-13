import PurchaseCard from "./PurchaseCard";
import styles from "./PurchaseList.module.css";

export default function PurchaseList() {
const purchases = [
  {
    image: "/carruselImages/comboMaybeline.jpg",
    status: "Entregado" as const, 
    date: "29 de Septiembre",
    orderId: "23/09 21:32hs",
    items: 1,
    payment: "tarjeta de crédito",
    price: 146567,
  },
  {
    image: "/carruselImages/comboMaybeline.jpg",
    status: "En camino" as const,
    date: "30 de Septiembre",
    orderId: "24/09 20:15hs",
    items: 2,
    payment: "tarjeta de crédito",
    price: 200000,
  },
];


  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Mis compras</h2>
      <p className={styles.subtitle}>{purchases.length} compras</p>

      <div className={styles.list}>
        {purchases.map((p, index) => (
          <PurchaseCard key={index} {...p} />
        ))}
      </div>
    </div>
  );
}
