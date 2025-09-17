"use client";

import React, { useState, useEffect } from "react";
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
    image: "/test-images/falsies.jpg",
    subcategories: ["Artístico", "Fantasía", "Social"],
  },
  {
    id: 2,
    name: "Deportivo",
    image: "/test-images/deportivo.webp",
    subcategories: ["Fútbol", "Running", "Natación"],
  },
  {
    id: 3,
    name: "Electrodomésticos",
    image: "/test-images/electrodomesticos.jpeg",
    subcategories: ["Cocina", "Limpieza", "Climatización"],
  },
  {
    id: 4,
    name: "Decoración",
    image: "/test-images/decoracion.jpg",
    subcategories: ["Artístico", "Fantasía", "Social"],
  },
  {
    id: 5,
    name: "Vehículos",
    image: "/test-images/vehiculos.jpg",
    subcategories: ["Fútbol", "Running", "Natación"],
  },
  {
    id: 6,
    name: "Mochilas",
    image: "/test-images/bags.jpg",
    subcategories: ["Cocina", "Limpieza", "Climatización"],
  },
];

const CategoryList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      setOpenIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenIndex(null);
    }
  };

  return (
    <div className={styles.categoryList}>
      {categories.map((cat, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={cat.id}
            className={`${styles.categoryCard} ${isOpen ? styles.expanded : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick(index)}
          >
            <div className={styles.categoryHeader}>
              <img src={cat.image} alt={cat.name} className={styles.categoryImage} />
              <span className={styles.categoryName}>{cat.name}</span>
              {isMobile && cat.subcategories && (
                <button className={styles.expandButton}>
                  <svg 
                    className={`${styles.arrowIcon} ${isOpen ? styles.rotated : ''}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    height="24px" 
                    viewBox="0 -960 960 960" 
                    width="24px" 
                    fill="#ff6b35"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                  </svg>
                </button>
              )}
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