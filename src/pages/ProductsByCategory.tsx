import { useParams } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import NavBar from "../component/NavBar/NavBar";
import ProductGrid from "../component/ProductCard/ProductGrid";
import styles from "./styles/ProductsByCategory.module.css";

// Datos hardcodeados por categoría - en el futuro vendrían del backend
const productsByCategory: { [key: string]: any[] } = {
  'maquillaje': [
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
      name: "Base líquida FitMe Maybelline",
      image: "/test-images/fitme.jpg",
      price: 32450,
      discountPrice: 18240,
      discountPercent: 45,
    },
  ],
  'deportivo': [
    {
      id: 4,
      name: "Zapatillas Running Nike",
      image: "/test-images/nike-running.jpg",
      price: 85990,
      discountPrice: 68790,
      discountPercent: 20,
    },
    {
      id: 5,
      name: "Pelota de Fútbol Adidas",
      image: "/test-images/pelota-futbol.jpg",
      price: 12500,
    },
    {
      id: 6,
      name: "Malla de Natación Speedo",
      image: "/test-images/malla-natacion.jpg",
      price: 18900,
    },
  ],
  'electrodomesticos': [
    {
      id: 7,
      name: "Licuadora Philips 600W",
      image: "/test-images/licuadora.jpg",
      price: 67890,
      discountPrice: 54312,
      discountPercent: 20,
    },
    {
      id: 8,
      name: "Microondas Samsung 20L",
      image: "/test-images/microondas.jpg",
      price: 89990,
    },
    {
      id: 9,
      name: "Cafetera Express Nespresso",
      image: "/test-images/cafetera.jpg",
      price: 125900,
      discountPrice: 100720,
      discountPercent: 20,
    },
  ],
  'decoracion': [
    {
      id: 10,
      name: "Cuadro Abstracto 60x80",
      image: "/test-images/cuadro-abstracto.jpeg",
      price: 25900,
    },
    {
      id: 11,
      name: "Lámpara de Mesa Moderna",
      image: "/test-images/lampara.jpeg",
      price: 18500,
      discountPrice: 14800,
      discountPercent: 20,
    },
  ],
  'vehiculos': [
    {
      id: 12,
      name: "Neumático Michelin 185/60 R15",
      image: "/test-images/neumatico.jpg",
      price: 45600,
      discountPrice: 36480,
      discountPercent: 20,
    },
    {
      id: 13,
      name: "Aceite Motor Castrol 5W30",
      image: "/test-images/aceite-motor.jpg",
      price: 12900,
    },
  ],
  'mochilas': [
    {
      id: 14,
      name: "Mochila Deportiva Nike",
      image: "/test-images/mochila-nike.jpg",
      price: 22900,
    },
    {
      id: 15,
      name: "Mochila Escolar Jansport",
      image: "/test-images/mochila-escolar.jpg",
      price: 18500,
      discountPrice: 14800,
      discountPercent: 20,
    },
  ],
  // Subcategorías
  'artistico': [
    {
      id: 16,
      name: "Kit Maquillaje Artístico Profesional",
      image: "/test-images/kit-artistico.jpg",
      price: 89990,
      discountPrice: 71990,
      discountPercent: 20,
    },
    {
      id: 17,
      name: "Paleta de Colores Fantasy",
      image: "/test-images/paleta-colores.jpg",
      price: 34500,
    },
  ],
  'futbol': [
    {
      id: 18,
      name: "Botines Adidas Predator",
      image: "/test-images/botines-adidas.jpg",
      price: 125900,
      discountPrice: 100720,
      discountPercent: 20,
    },
    {
      id: 19,
      name: "Camiseta Selección Argentina",
      image: "/test-images/camiseta-argentina.jpg",
      price: 35600,
    },
  ],
  'cocina': [
    {
      id: 20,
      name: "Batidora KitchenAid 300W",
      image: "/test-images/batidora.jpg",
      price: 189990,
      discountPrice: 151990,
      discountPercent: 20,
    },
    {
      id: 21,
      name: "Set Cuchillos Acero Inoxidable",
      image: "/test-images/set-cuchillos.jpg",
      price: 45600,
    },
  ]
};

// Función para capitalizar y formatear el nombre de categoría para mostrar
const formatCategoryName = (category: string): string => {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function ProductsByCategory() {
    const { category } = useParams<{ category: string }>();
    
    // Obtener productos de la categoría (en el futuro sería un hook)
    const products = category ? productsByCategory[category] || [] : [];
    
    // Nombre formateado para el título
    const categoryDisplayName = category ? formatCategoryName(category) : 'Categoría no encontrada';

    return (
        <main>
            <NavBar />
            
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>
                    {categoryDisplayName}
                </h1>
                
                {products.length > 0 ? (
                    <ProductGrid 
                        products={products}
                        showViewAllButton={false}
                    />
                ) : (
                    <div className={styles.emptyState}>
                        <h2 className={styles.emptyTitle}>
                            No se encontraron productos
                        </h2>
                        <p className={styles.emptyDescription}>
                            La categoría "{categoryDisplayName}" no tiene productos disponibles en este momento.
                        </p>
                    </div>
                )}
            </div>
            
            <Footer />
        </main>
    );
}