import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";
import {useNavigate} from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Combo Maybelline",
    image: "/test-images/maybelline-combo.jpg",
    price: 55420,
    discountPrice: 37564,
    discountPercent: 25,
  },
  {
    id: 2,
    name: "Máscara de pestañas Falsies Maybelline",
    image: "/test-images/falsies.jpg",
    price: 22403,
    discountPrice: 17564,
    discountPercent: 18,
  },
  {
    id: 3,
    name: "Bronzer Sunkisser Maybelline",
    image: "/test-images/sunkisser.jpg",
    price: 26340,
  },
  {
    id: 4,
    name: "Rubor Sunkisser Maybelline",
    image: "/test-images/sunkiss.jpg",
    price: 25780,
  },
  {
    id: 5,
    name: "Gloss Superstay Maybelline",
    image: "/test-images/superstay.jpg",
    price: 17560,
  },
  {
    id: 6,
    name: "Base líquida FitMe Maybelline",
    image: "/test-images/fitme.jpg",
    price: 32450,
    discountPrice: 18240,
    discountPercent: 45,
  },
];

export default function ProductGrid() {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/products");
  }
  return (
    <div>
      <div className={styles.grid}>
        {products.map((p) => (
            <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className={styles.buttonContainerProperties}>
        <button onClick={handleAdd} className={styles.seeAllProductsProperties}>Ver productos</button>
      </div>
    </div>
  );
}
