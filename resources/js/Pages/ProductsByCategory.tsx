import { useParams } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import ProductGrid from "../Components/ProductCard/ProductGrid";
import styles from "./styles/ProductsByCategory.module.css";

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
      image: "/test-images/pelota-adidas.webp",
      price: 12500,
    },
    {
      id: 6,
      name: "Malla de Natación Speedo",
      image: "/test-images/malla-natacion.jpeg",
      price: 18900,
    },
  ],
  'electrodomesticos': [
    {
      id: 7,
      name: "Licuadora Philips 600W",
      image: "/test-images/licuadora.webp",
      price: 67890,
      discountPrice: 54312,
      discountPercent: 20,
    },
    {
      id: 8,
      name: "Microondas Samsung 20L",
      image: "/test-images/microondas.jpeg",
      price: 89990,
    },
    {
      id: 9,
      name: "Cafetera Express Nespresso",
      image: "/test-images/cafetera.webp",
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
      image: "/test-images/neumatico.webp",
      price: 45600,
      discountPrice: 36480,
      discountPercent: 20,
    },
    {
      id: 13,
      name: "Aceite Motor Castrol 5W30",
      image: "/test-images/aceite-motor.webp",
      price: 12900,
    },
    {
      id: 54,
      name: "Toyota Hilux 2023",
      image: "/test-images/hilux.jpg",
      price: 70000000,
    },
    {
      id: 55,
      name: "Fiat Cronos 0km",
      image: "/test-images/cronos.webp",
      price: 26000000,
    }
  ],
  'mochilas': [
    {
      id: 14,
      name: "Mochila Deportiva Nike",
      image: "/test-images/mochila-nike.jpeg",
      price: 22900,
    },
    {
      id: 15,
      name: "Mochila Escolar Jansport",
      image: "/test-images/mochila-escolar.webp",
      price: 18500,
      discountPrice: 14800,
      discountPercent: 20,
    },
  ],
   'indumentaria' : [
  {
    id: 22,
    name: "Remera Básica Algodón",
    image: "/test-images/remera-basica.jpeg",
    price: 15990,
    discountPrice: 12790,
    discountPercent: 20,
  },
  {
    id: 23,
    name: "Jean Skinny Azul",
    image: "/test-images/jean-skinny.jpeg",
    price: 34500,
  },
  {
    id: 24,
    name: "Campera de Cuero",
    image: "/test-images/campera-cuero.jpg",
    price: 89999,
    discountPrice: 71999,
    discountPercent: 20,
  },
  {
    id: 25,
    name: "Zapatillas Deportivas",
    image: "/test-images/zapatillas.jpeg",
    price: 45600,
  },
],
  'tecnología': [
    {
      id: 26,
      name: "Iphone 13",
      image: "/test-images/iphone13.jpg",
      price: 400000
    },
    {
      id: 27,
      name: "Iphone 16",
      image: "/test-images/iphone.png",
      price: 900000
    },
    {
      id: 28,
      name: "Computadora Samsung",
      image: "/test-images/samsung-compu.jpeg",
      price: 400000
    }
  ],
  'música': [
    {
      id: 29,
      name: "Saxofon Yamaha",
      image: "/test-images/saxofon.jpeg",
      price: 700000
    },
    {
      id: 30,
      name: "Taylor Swift Disco Homónimo",
      image: "/test-images/taylor-swift.avif",
      price: 30000
    },
  ],
  // Subcategorías
  'artístico': [
    {
      id: 16,
      name: "Kit Maquillaje Artístico Profesional",
      image: "/test-images/kit-artistico.jpeg",
      price: 89990,
      discountPrice: 71990,
      discountPercent: 20,
    },
    {
      id: 17,
      name: "Paleta de Colores Fantasy",
      image: "/test-images/paleta-colores.webp",
      price: 34500,
    },
  ],
  'social': [
   {
      id: 31,
      name: "Combo Maybelline",
      image: "/test-images/maybelline-combo.jpg",
      price: 55420,
      discountPrice: 37564,
      discountPercent: 25,
    },
    {
      id: 32,
      name: "Máscara de pestañas Falsies Maybelline",
      image: "/test-images/falsies.jpg",
      price: 22403,
      discountPrice: 17564,
      discountPercent: 18,
    },
    {
      id: 33,
      name: "Base líquida FitMe Maybelline",
      image: "/test-images/fitme.jpg",
      price: 32450,
      discountPrice: 18240,
      discountPercent: 45,
    },
  ],
  'fútbol': [
    {
      id: 18,
      name: "Botines Adidas Predator",
      image: "/test-images/botines-adidas.webp",
      price: 125900,
      discountPrice: 100720,
      discountPercent: 20,
    },
    {
      id: 19,
      name: "Camiseta Selección Argentina",
      image: "/test-images/camiseta-argentina.webp",
      price: 35600,
    },
  ],
  'running': [
    {
      id: 34,
      name: "Runner kit",
      image: "/test-images/runner-kit.jpg",
      price: 60000,
      discountPrice: 55000,
      discountPercent: 5,
    },
    {
      id: 35,
      name: "Running shoes",
      image: "/test-images/running-shoes.jpeg",
      price: 160000,
      discountPrice: 100000,
      discountPercent: 30,
    },
    {
      id: 35,
      name: "Botellón",
      image: "/test-images/botella.jpeg",
      price: 30000,
    },
  ],
  'natación': [
    {
      id: 36,
      name: "kit para apneas",
      image: "/test-images/antiparras.jpeg",
      price: 50000,
    },
    {
      id: 38,
      name: "kit natación",
      image: "/test-images/kit-natacion.jpeg",
      price: 60000
    },
    {
      id: 39,
      name: "patas de rana",
      image: "/test-images/patas-de-rana.jpeg",
      price: 40000
    }
  ],
  'cocina': [
    {
      id: 20,
      name: "Batidora KitchenAid 300W",
      image: "/test-images/batidora.webp",
      price: 189990,
      discountPrice: 151990,
      discountPercent: 20,
    },
    {
      id: 21,
      name: "Set Cuchillos Acero Inoxidable",
      image: "/test-images/set-cuchillos.webp",
      price: 45600,
    },
  ],
  'limpieza': [
    {
      id: 40,
      name: "Aspiradora",
      image: "/test-images/aspiradora.jpeg",
      price: 130000,
    },
    {
      id: 41,
      name: "Aspiradora",
      image: "/test-images/aspiradora.webp",
      price: 110000,
    },
    {
      id: 42,
      name: "robot de limpieza",
      image: "/test-images/robot.webp",
      price: 300000,
    }
  ],
  'muebles': [
    {
      id: 43,
      name: "Mesa",
      image: "/test-images/mesa.webp",
      price: 100000,
    },
    {
      id: 44,
      name: "estantería",
      image: "/test-images/estanteria.jpg",
      price: 70000
    }
  ],
  'adornos': [
    {
      id: 45,
      name: "Cuadros triples",
      image: "/test-images/cuadros-triples.jpg",
      price: 90000,
    },
    {
      id: 46,
      name: "Florero",
      image: "/test-images/florero.jpg",
      price: 40000,
    },
    {
      id: 47,
      name: "Cuadro abstracto",
      image: "/test-images/cuadro-abstracto.jpeg",
      price: 120000,
    }
  ],
  'autos': [
    {
      id: 48,
      name: "Peugeot 208 0km",
      image: "/test-images/peugeot.jpg",
      price: 40000000,
    },
    {
      id: 49,
      name: "Toyota Corolla 2023",
      image: "/test-images/corolla.png",
      price: 31000000,
    },
    {
      id: 50,
      name: "Fiat Cronos 0km",
      image: "/test-images/cronos.webp",
      price: 26000000,
    }
  ],
  'camionetas': [
    {
      id: 51,
      name: "Toyota Hilux 2023",
      image: "/test-images/hilux.jpg",
      price: 70000000,
    },
    {
      id: 52,
      name: "Renault Alaskan 0km",
      image: "/test-images/alaskan.webp",
      price: 67000000,
    },
    {
      id: 53,
      name: "Wolkswagen Amarok 2020",
      image: "/test-images/amarok.avif",
      price: 63000000,
    }
  ],
  'útiles': [
    {
      id: 56,
      name: "Limpiador de carrocería",
      image: "/test-images/limpiador.webp",
      price: 25000,
    },
     {
      id: 57,
      name: "Aspiradora",
      image: "/test-images/aspiradora.jpeg",
      price: 130000,
    },
  ],
  'escolares': [
    {
      id: 58,
      name: "mochila cerezas",
      image: "/test-images/mochi-cerezas.webp",
      price: 70000,
    },
    {
      id: 59,
      name: "mochi escolar típica",
      image: "/test-images/mochi-escolar.webp",
      price: 64000,
    }
  ],
  'tote-bags': [
    {
      id: 60,
      name: "Tote Bag Flores",
      image: "/test-images/totebag-flores.jpg",
      price: 43000
    },
    {
      id: 61,
      name: "Tote Bag Organic",
      image: "/test-images/totebag-organic.jpeg",
      price: 21000
    }
  ],
  'carteras': [
    {
      id: 62,
      name: "Cartera Azul",
      image: "/test-images/cartera-azul.jpg",
      price: 110000,
    },
    {
      id: 63,
      name: "Cartera gris",
      image: "/test-images/cartera-gris.webp",
      price: 18000,
    }
  ],
  'remeras': [
    {
      id: 64,
      name: "Remera blanca algodón",
      image: "/test-images/remera-basica.jpeg",
      price: 20000
    },
    {
      id: 65,
      name: "Remera verde algodón",
      image: "/test-images/remera-verde.jpeg",
      price: 20000
    },
    {
      id: 66,
      name: "Remera batik algodón",
      image: "/test-images/remera-batik.jpeg",
      price: 20000
    }
  ],
  'jeans': [
    {
      id: 67,
      name: "Jean wide leg",
      image: "/test-images/wide-leg.jpeg",
      price: 35000,
    },
    {
      id: 68,
      name: "Jean oxford Leutthe",
      image: "/test-images/oxford.jpg",
      price: 42000,
    },
    {
      id: 69,
      name: "Jean oxford usado",
      image: "/test-images/oxford.webp",
      price: 14000
    }
  ],
  'zapatillas': [
    {
      id: 70,
      name: "zapatillas urbanas",
      image: "/test-images/zapatillas.jpeg",
      price: 15000,
    },
    {
      id: 71,
      name: "Zapatillas adidas",
      image: "/test-images/adidas.jpeg",
      price: 60000,
    },
    {
      id: 72,
      name: "Adidas campus",
      image: "/test-images/campus.jpeg",
      price: 110000,
    }
  ],
  'celulares': [
    {
      id: 73,
      name: "Iphone 13",
      image: "/test-images/iphone13.jpg",
      price: 400000
    },
    {
      id: 74,
      name: "Iphone 16",
      image: "/test-images/iphone.png",
      price: 900000
    },
    {
      id: 75,
      name: "Samsung A05",
      image: "/test-images/a05.webp",
      price: 23000
    }
  ],
  'computadoras': [
    {
      id: 76,
      name: "Computadora HP",
      image: "/test-images/hp.jpeg",
      price: 800000,
    },
    {
      id: 77,
      name: "Computadora Samsung",
      image: "/test-images/samsung-compu.jpeg",
      price: 2200000
    }
  ],
  'periféricos': [
    {
      id: 78,
      name: "Mouse gamer",
      image: "/test-images/mouse-gamer.jpg",
      price: 43000,
    },
    {
      id: 79,
      name: "Teclado con colores",
      image: "/test-images/teclado.jpg",
      price: 32000
    }
  ],
  'instrumentos':[
    {
      id: 80,
      name: "Guitarra criolla",
      image: "/test-images/guitarra.jpeg",
      price: 500000,
    },
    {
      id: 81,
      name: "Saxofón Yamaha",
      image: "/test-images/saxofon.jpeg",
      price: 700000,
    }
  ],
  'discos': [
    {
      id: 82,
      name: "Taylor Swift Disco Homónimo",
      image: "/test-images/taylor-swift.avif",
      price: 30000
    },
    {
      id: 83,
      name: "Taylor Swift Disco Lover ",
      image: "/test-images/lover.webp",
      price: 24000,
    },
    {
      id: 84,
      name: "Taylor Swift Disco Reputation",
      image: "/test-images/reputation.jpg",
      price: 50000,
    }
  ],
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