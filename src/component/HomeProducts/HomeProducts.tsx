import ProductGrid from "../ProductCard/ProductGrid";
import styles from "./HomeProducts.module.css";

// Datos de ejemplo para productos en oferta
const offerProducts = [
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
    id: 6,
    name: "Base líquida FitMe Maybelline",
    image: "/test-images/fitme.jpg",
    price: 32450,
    discountPrice: 18240,
    discountPercent: 45,
  },
];

// Datos de ejemplo para productos destacados
const featuredProducts = [
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
];

export default function HomeProducts() {
  return (
    <div className={styles.homeProductsContainer}>
      {/* Sección de Ofertas del mes */}
      <section className={styles.productSection}>
        <h2 className={styles.sectionTitle}>Ofertas del mes</h2>
        <ProductGrid 
          products={offerProducts}
          showViewAllButton={false}
          viewAllButtonText="Ver todas las ofertas"
          viewAllButtonPath="/ofertas"
        />
      </section>

      {/* Sección de Productos destacados */}
      <section className={styles.productSection}>
        <h2 className={styles.sectionTitle}>Productos destacados</h2>
        <ProductGrid 
          products={featuredProducts}
          showViewAllButton={false}
          viewAllButtonText="Ver productos destacados"
          viewAllButtonPath="/destacados"
        />
      </section>

    </div>
  );
}