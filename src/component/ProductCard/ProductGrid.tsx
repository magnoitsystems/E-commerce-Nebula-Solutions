import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
}

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
