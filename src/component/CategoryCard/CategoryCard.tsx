"use client";

import { useState } from "react";
import styles from "./CategoryCard.module.css";
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';

interface Category {
    id: number;
    name: string;
}

export default function CategoryCard() {
    const [categories, setCategories] = useState<Category[]>([
        { id: 1, name: "Maquillaje" },
        { id: 2, name: "Maquillaje" },
        { id: 3, name: "Maquillaje" },
        { id: 4, name: "Maquillaje" },
    ]);

    const handleDelete = (id: number) => {
        setCategories(categories.filter((c) => c.id !== id));
    };

    const handleEdit = (id: number) => {
        const newName = prompt("Editar categoría:");
        if (newName) {
            setCategories(
                categories.map((c) => (c.id === id ? { ...c, name: newName } : c))
            );
        }
    };

    const handleAdd = () => {
        const newName = prompt("Nueva categoría:");
        if (newName) {
            setCategories([...categories, { id: Date.now(), name: newName }]);
        }
    };

    return (
        <div className={styles.wrapper}>
            <h3
                className={styles.title}
                style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 600 }}
            >
                Categorías
            </h3>

            <div className={styles.gridWrapper}>
                <div className={styles.container}>
                    {categories.map((cat) => (
                        <div key={cat.id} className={styles.card}>
                            <span className={styles.name} style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 600 }}>{cat.name}</span>

                            <div className={styles.actions}>
                                <button
                                    className={`${styles.iconBtn} ${styles.deleteBtn}`}
                                    onClick={() => handleDelete(cat.id)}
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
                                    onClick={() => handleEdit(cat.id)}
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

                <button className={styles.addBtn} onClick={handleAdd} aria-label="Nueva categoría">
                    Nueva categoría
                    <span className={styles.plus}>+</span>
                </button>
            </div>
        </div>
    );
}