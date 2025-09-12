import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";

const products = [
  {
    id: 1,
    name: "Sombras de ojos",
    image: "/test-images/maybelline-combo.jpg",
    price: 15000,
    discountPrice: 10000,
    discountPercent: 25,
  },
  {
    id: 2,
    name: "Sombras de ojos",
    image: "/test-images/maybelline-combo.jpg",
    price: 15000,
  },
  {
    id: 3,
    name: "Sombras de ojos",
    image: "/test-images/maybelline-combo.jpg",
    price: 20000,
  },
];

export default function ProductGrid() {
  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
