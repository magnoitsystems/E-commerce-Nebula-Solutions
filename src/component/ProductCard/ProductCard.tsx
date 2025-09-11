import styles from "./ProductCard.module.css";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { name, image, price, discountPrice, discountPercent } = product;

  return (
    <div className={styles.card}>
      {discountPercent && (
        <div className={styles.discountBadge}>{discountPercent}%</div>
      )}
      <img src={image} alt={name} className={styles.image} />

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        {discountPrice ? (
          <div className={styles.prices}>
            <span className={styles.oldPrice}>${price.toLocaleString()}</span>
            <span className={styles.newPrice}>
              ${discountPrice.toLocaleString()}
            </span>
          </div>
        ) : (
          <div className={styles.prices}>
            <span className={styles.newPrice}>
              ${price.toLocaleString()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
