// src/components/CategoryList.tsx
import React from "react";
import styles from "./CategoryList.module.css";

interface Category {
  id: number;
  name: string;
  image: string;
  subcategories: string[];
}

const categories: Category[] = [
  {
    id: 1,
    name: "Maquillaje",
    image: "/test-images/falsies.jpg",
    subcategories: ["Artístico", "Fantasía", "Social", "Efectos especiales"],
  },
  {
    id: 2,
    name: "Deportivo",
    image: "/test-images/sports.jpg",
    subcategories: ["Fútbol", "Básquet", "Tenis", "Running"],
  },
  {
    id: 3,
    name: "Electrodomésticos",
    image: "/test-images/electro.jpg",
    subcategories: ["Cocina", "Lavarropas", "Climatización"],
  },
  {
    id: 4,
    name: "Herramientas y útiles",
    image: "/test-images/tools.jpg",
    subcategories: ["Manuales", "Eléctricas", "Medición"],
  },
  {
    id: 5,
    name: "Indumentaria",
    image: "/test-images/clothes.jpg",
    subcategories: ["Hombre", "Mujer", "Niños"],
  },
  {
    id: 6,
    name: "Decoración",
    image: "/test-images/deco.jpg",
    subcategories: ["Living", "Dormitorio", "Exterior"],
  },
  {
    id: 7,
    name: "Vehículos",
    image: "/test-images/cars.jpg",
    subcategories: ["Autos", "Motos", "Camionetas"],
  },
  {
    id: 8,
    name: "Accesorios",
    image: "/test-images/accessories.jpg",
    subcategories: ["Relojes", "Carteras", "Cinturones"],
  },
  {
    id: 9,
    name: "Mochilas y carry ons",
    image: "/test-images/bags.jpg",
    subcategories: ["Mochilas", "Valijas", "Bolsos"],
  },
];

const CategoryList: React.FC = () => {
  return (
    <div className={styles.categoryList}>
      {categories.map((cat) => (
        <div key={cat.id} className={styles.categoryCard}>
          <div className={styles.categoryHeader}>
            <img
              src={cat.image}
              alt={cat.name}
              className={styles.categoryImage}
            />
            <span className={styles.categoryName}>{cat.name}</span>
          </div>

          <ul className={styles.subcategories}>
            {cat.subcategories.map((sub, i) => (
              <li key={i} className={styles.subcategoryItem}>
                {sub}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
