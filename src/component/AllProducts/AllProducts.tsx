import ProductGrid from "../ProductCard/ProductGrid";
import styles from "./AllProducts.module.css";

// Datos de ejemplo organizados por categorías
const maquillaje = [
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

const indumentaria = [
  {
    id: 7,
    name: "Remera Básica Algodón",
    image: "/test-images/remera-basica.jpg",
    price: 15990,
    discountPrice: 12790,
    discountPercent: 20,
  },
  {
    id: 8,
    name: "Jean Skinny Azul",
    image: "/test-images/jean-skinny.jpg",
    price: 34500,
  },
  {
    id: 9,
    name: "Campera de Cuero",
    image: "/test-images/campera-cuero.jpg",
    price: 89999,
    discountPrice: 71999,
    discountPercent: 20,
  },
  {
    id: 10,
    name: "Zapatillas Deportivas",
    image: "/test-images/zapatillas.jpg",
    price: 45600,
  },
];

const electrodomesticos = [
  {
    id: 11,
    name: "Licuadora Philips 600W",
    image: "/test-images/licuadora.jpg",
    price: 67890,
    discountPrice: 54312,
    discountPercent: 20,
  },
  {
    id: 12,
    name: "Tostadora Oster 4 Rebanadas",
    image: "/test-images/tostadora.jpg",
    price: 32450,
  },
  {
    id: 13,
    name: "Cafetera Express Nespresso",
    image: "/test-images/cafetera.jpg",
    price: 125900,
    discountPrice: 100720,
    discountPercent: 20,
  },
];

export default function AllProducts() {
  return (
    <div className={styles.allProductsContainer}>
      {/* Categoría Maquillaje */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Maquillaje</h2>
        <ProductGrid 
          products={maquillaje}
          showViewAllButton={true}
          viewAllButtonText="Ver todo el maquillaje"
          viewAllButtonPath="/productsByCategory/maquillaje"
        />
      </section>

      {/* Categoría Indumentaria */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Indumentaria</h2>
        <ProductGrid 
          products={indumentaria}
          showViewAllButton={true}
          viewAllButtonText="Ver toda la indumentaria"
          viewAllButtonPath="/productsByCategory/indumentaria"
        />
      </section>

      {/* Categoría Electrodomésticos */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Electrodomésticos</h2>
        <ProductGrid 
          products={electrodomesticos}
          showViewAllButton={true}
          viewAllButtonText="Ver todos los electrodomésticos"
          viewAllButtonPath="/productsByCategory/electrodomesticos"
        />
      </section>
    </div>
  );
}