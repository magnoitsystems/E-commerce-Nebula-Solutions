"use client";

import { useState } from "react";
import styles from "./ProductCard.module.css";
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';

interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
}

export default function ProductList() {
    const [products] = useState<Product[]>([
        { 
            id: 1, 
            name: "Combo labiales Maybeline NY", 
            category: "Maquillaje",
            image: "/test-images/maybelline-combo.jpg"
        },
        { 
            id: 2, 
            name: "Combo labiales Maybeline NY", 
            category: "Maquillaje",
            image: "/test-images/maybelline-combo.jpg"
        },
    ]);

    //FUTURE METHODS THAT WILL HANDLE THE ADMIN OPERAIONS
    const handleDelete = (id: number) => {
    };

    const handleEdit = (id: number) => {

    };

    const handleAdd = () => {

    };

    return (
        <div className={styles.wrapper}>
            <h3
                className={styles.title}
                style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 600 }}
            >
                Productos
            </h3>
        

            {/* BOTÓN FUERA DEL GRID - ARRIBA */}
            <button className={styles.addBtn} onClick={handleAdd} aria-label="Nueva publicación">
                Nueva publicación
                <span className={styles.plus}>+</span>
            </button>

            <div className={styles.gridWrapper}>
                <div className={styles.container}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className={styles.productImage}
                                />
                            </div>
                            
                            <div className={styles.cardContent}>
                                <h4 className={styles.productName} style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 600 }}>
                                    {product.name}
                                </h4>
                                <span className={styles.category} style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 400 }}>
                                    {product.category}
                                </span>
                            </div>

                            <div className={styles.actions}>
                                <button
                                    className={`${styles.iconBtn} ${styles.deleteBtn}`}
                                    onClick={() => handleDelete(product.id)}
                                    aria-label="Eliminar"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 
                      56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 
                      0h80v-360h-80v360ZM280-720v520-520Z"/>
                                    </svg>
                                </button>

                                <button
                                    className={`${styles.iconBtn} ${styles.editBtn}`}
                                    onClick={() => handleEdit(product.id)}
                                    aria-label="Editar"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 
                      80v-170l528-527q12-11 26.5-17t30.5-6q16 
                      0 31 6t26 18l55 56q12 11 17.5 26t5.5 
                      30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 
                      56 56Zm-141 85-28-29 57 57-29-28Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}