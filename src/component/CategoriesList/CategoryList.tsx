"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Función para navegar a categoría
  const handleCategoryClick = (categoryName: string) => {
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/productsByCategory/${categorySlug}`);
  };

  // Función para navegar a subcategoría
  const handleSubcategoryClick = (subcategoryName: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que se propague al click del card
    const subcategorySlug = subcategoryName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/productsByCategory/${subcategorySlug}`);
  };

  const handleCardClick = (index: number, categoryName: string) => {
    if (isMobile) {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      // En desktop, click directo navega a la categoría
      handleCategoryClick(categoryName);
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

  const handleCategoryNameClick = (categoryName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    handleCategoryClick(categoryName);
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
            onClick={() => handleCardClick(index, cat.name)}
          >
            <div className={styles.categoryHeader}>
              <img src={cat.image} alt={cat.name} className={styles.categoryImage} />
              <span 
                className={styles.categoryName}
                onClick={(e) => handleCategoryNameClick(cat.name, e)}
              >
                {cat.name}
              </span>
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
                  <li 
                    key={subIndex} 
                    className={styles.subcategoryItem}
                    onClick={(e) => handleSubcategoryClick(sub, e)}
                  >
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