// src/components/CategoryList.tsx
import React from "react";
import styles from "./CategoryList.module.css";

interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: "Maquillaje" },
  { id: 2, name: "Deportivo" },
  { id: 3, name: "Electrodomésticos" },
  { id: 4, name: "Herramientas y útiles" },
  { id: 5, name: "Maquillaje" },
  { id: 6, name: "Maquillaje" },
  { id: 7, name: "Maquillaje" },
  { id: 8, name: "Maquillaje" },
  { id: 9, name: "Maquillaje" },
];

const CategoryList: React.FC = () => {
  return (
    <div className={styles.categoryList}>
      {categories.map((cat) => (
        <div key={cat.id} className={styles.categoryCard}>
          <img
            src="/test-images/falsies.jpg"
            alt={cat.name}
            className={styles.categoryImage}
          />
          <span className={styles.categoryName}>{cat.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
