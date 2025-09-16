"use client";

import React, { useState } from "react";
import styles from "./CategoryList.module.css";

interface Category {
  id: number;
  name: string;
  image: string;
  subcategories?: string[];
}

const categories: Category[] = [
  {
    id: 1,
    name: "Maquillaje",
    image: "/test-images/makeup.jpg",
    subcategories: ["Artístico", "Fantasía", "Social", "Efectos especiales"],
  },
  {
    id: 2,
    name: "Deportivo",
    image: "/test-images/sports.jpg",
    subcategories: ["Fútbol", "Running", "Natación"],
  },
  {
    id: 3,
    name: "Electrodomésticos",
    image: "/test-images/electro.jpg",
    subcategories: ["Cocina", "Limpieza", "Climatización"],
  },
  {
    id: 4,
    name: "Maquillaje",
    image: "/test-images/makeup.jpg",
    subcategories: ["Artístico", "Fantasía", "Social", "Efectos especiales"],
  },
  {
    id: 5,
    name: "Deportivo",
    image: "/test-images/sports.jpg",
    subcategories: ["Fútbol", "Running", "Natación"],
  },
  {
    id: 6,
    name: "Electrodomésticos",
    image: "/test-images/electro.jpg",
    subcategories: ["Cocina", "Limpieza", "Climatización"],
  },
];

const CategoryList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.categoryList}>
      {categories.map((cat, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={cat.id}
            className={styles.categoryCard}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <div className={styles.categoryHeader}>
              <img src={cat.image} alt={cat.name} className={styles.categoryImage} />
              <span className={styles.categoryName}>{cat.name}</span>
            </div>

            {cat.subcategories && (
              <ul className={`${styles.subcategories} ${isOpen ? styles.show : ""}`}>
                {cat.subcategories.map((sub, subIndex) => (
                  <li key={subIndex} className={styles.subcategoryItem}>
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
