"use client";

import { useState } from "react";
import styles from "./CategoryCard.module.css";
import AlertCard from "../AlertCard/AlertCard";

interface Subcategory {
    id: number;
    name: string;
}

interface Category {
    id: number;
    name: string;
    subcategories: Subcategory[];
}

export default function CategoryCard() {
    const [categories, setCategories] = useState<Category[]>([
        {
            id: 1,
            name: "Maquillaje",
            subcategories: [
                { id: 101, name: "Artístico" },
                { id: 102, name: "Social" }
            ]
        },
        {
            id: 2,
            name: "Deportivo",
            subcategories: [
                { id: 201, name: "Fútbol" },
                { id: 202, name: "Running" },
                { id: 203, name: "Natación" }
            ]
        },
        {
            id: 3,
            name: "Electrodomésticos",
            subcategories: [
                { id: 301, name: "Cocina" },
                { id: 302, name: "Limpieza" }
            ]
        },
        {
            id: 4,
            name: "Decoración",
            subcategories: [
                { id: 401, name: "Muebles" },
                { id: 402, name: "Adornos" }
            ]
        },
        {
            id: 5,
            name: "Vehículos",
            subcategories: [
                { id: 501, name: "Autos" },
                { id: 502, name: "Camionetas" },
                { id: 503, name: "Útiles" }
            ]
        },
        {
            id: 6,
            name: "Mochilas",
            subcategories: [
                { id: 601, name: "Escolares" },
                { id: 602, name: "Tote Bags" },
                { id: 603, name: "Carteras" }
            ]
        },
        {
            id: 7,
            name: "Indumentaria",
            subcategories: [
                { id: 701, name: "Remeras" },
                { id: 702, name: "Jeans" },
                { id: 703, name: "Zapatillas" }
            ]
        },
        {
            id: 8,
            name: "Tecnología",
            subcategories: [
                { id: 801, name: "Celulares" },
                { id: 802, name: "Computadoras" },
                { id: 803, name: "Periféricos" }
            ]
        },
        {
            id: 9,
            name: "Música",
            subcategories: [
                { id: 901, name: "Instrumentos" },
                { id: 902, name: "Discos" }
            ]
        }
    ]);

    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [newSubcategories, setNewSubcategories] = useState<string[]>([""]);
    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [pendingDeleteId, setPendingDeleteId] = useState<number | null>(null);


    const handleDelete = (id: number) => {
        const categoryToDelete = categories.find(cat => cat.id === id);
        if (categoryToDelete) {
            setPendingDeleteId(id);
            setAlertMessage(`¿Está seguro de que quiere eliminar la categoría "${categoryToDelete.name}" y sus ${categoryToDelete.subcategories.length} subcategoría${categoryToDelete.subcategories.length !== 1 ? 's' : ''}?`);
        }
    };

    const confirmDelete = () => {
        if (pendingDeleteId) {
            setCategories(categories.filter(cat => cat.id !== pendingDeleteId));
            setPendingDeleteId(null);
            setAlertMessage(null);
        }
    };

    const cancelDelete = () => {
        setPendingDeleteId(null);
        setAlertMessage(null);
    };

    const handleEdit = (id: number) => {
        const category = categories.find(cat => cat.id === id);
        if (category) {
            setEditingCategory({
                ...category,
                subcategories: [...category.subcategories]
            });
        }
    };

    const handleAdd = () => {
        setIsAddingCategory(true);
        setNewCategoryName("");
        setNewSubcategories([""]);
    };

    const handleSaveEdit = () => {
        if (editingCategory) {
            setCategories(categories.map(cat =>
                cat.id === editingCategory.id ? editingCategory : cat
            ));
            setEditingCategory(null);
            setAlertMessage("La categoría se ha editado correctamente");
        }
    };

    const handleCancelEdit = () => {
        setEditingCategory(null);
    };

    const handleSaveNew = () => {
        if (newCategoryName.trim()) {
            const newCategory: Category = {
                id: Date.now(),
                name: newCategoryName.trim(),
                subcategories: newSubcategories
                    .filter(sub => sub.trim() !== "")
                    .map((sub, index) => ({
                        id: Date.now() + index,
                        name: sub.trim()
                    }))
            };
            setCategories([...categories, newCategory]);
            setIsAddingCategory(false);
            setAlertMessage("La categoría se ha creado correctamente");
        }
    };

    const handleCancelNew = () => {
        setIsAddingCategory(false);
        setNewCategoryName("");
        setNewSubcategories([""]);
    };

    const updateEditingCategoryName = (name: string) => {
        if (editingCategory) {
            setEditingCategory({ ...editingCategory, name });
        }
    };

    const addSubcategoryToEdit = () => {
        if (editingCategory) {
            const newSubcat: Subcategory = {
                id: Date.now(),
                name: ""
            };
            setEditingCategory({
                ...editingCategory,
                subcategories: [...editingCategory.subcategories, newSubcat]
            });
        }
    };

    const updateSubcategoryInEdit = (subcatId: number, name: string) => {
        if (editingCategory) {
            setEditingCategory({
                ...editingCategory,
                subcategories: editingCategory.subcategories.map(sub =>
                    sub.id === subcatId ? { ...sub, name } : sub
                )
            });
        }
    };

    const removeSubcategoryFromEdit = (subcatId: number) => {
        if (editingCategory) {
            setEditingCategory({
                ...editingCategory,
                subcategories: editingCategory.subcategories.filter(sub => sub.id !== subcatId)
            });
        }
    };

    const addNewSubcategory = () => {
        setNewSubcategories([...newSubcategories, ""]);
    };

    const updateNewSubcategory = (index: number, value: string) => {
        const updated = [...newSubcategories];
        updated[index] = value;
        setNewSubcategories(updated);
    };

    const removeNewSubcategory = (index: number) => {
        setNewSubcategories(newSubcategories.filter((_, i) => i !== index));
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
                <button className={styles.addBtn} onClick={handleAdd} aria-label="Nueva categoría">
                    Nueva categoría
                    <span className={styles.plus}>+</span>
                </button>

                <div className={styles.container}>
                    {categories.map((cat) => (
                        <div key={cat.id} className={styles.card}>
                            <div className={styles.cardContent}>
                                <span className={styles.name} style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 600 }}>
                                    {cat.name}
                                </span>
                                <div className={styles.subcategoryCount}>
                                    {cat.subcategories.length} subcategoría{cat.subcategories.length !== 1 ? 's' : ''}
                                </div>
                            </div>

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
            </div>

            {/* Modal de Edición */}
            {editingCategory && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h3 className={styles.modalTitle}>Editar Categoría</h3>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Nombre de la categoría:</label>
                            <input
                                type="text"
                                value={editingCategory.name}
                                onChange={(e) => updateEditingCategoryName(e.target.value)}
                                className={styles.input}
                                placeholder="Nombre de la categoría"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <div className={styles.subcategoryHeader}>
                                <label className={styles.label}>Subcategorías:</label>
                                <button
                                    type="button"
                                    onClick={addSubcategoryToEdit}
                                    className={styles.addSubBtn}
                                >
                                    + Agregar subcategoría
                                </button>
                            </div>

                            <div className={styles.subcategoryList}>
                                {editingCategory.subcategories.map((subcat) => (
                                    <div key={subcat.id} className={styles.subcategoryItem}>
                                        <input
                                            type="text"
                                            value={subcat.name}
                                            onChange={(e) => updateSubcategoryInEdit(subcat.id, e.target.value)}
                                            className={styles.subcategoryInput}
                                            placeholder="Nombre de subcategoría"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeSubcategoryFromEdit(subcat.id)}
                                            className={styles.removeBtn}
                                            aria-label="Eliminar subcategoría"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.modalActions}>
                            <button
                                onClick={handleCancelEdit}
                                className={styles.cancelBtn}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSaveEdit}
                                className={styles.saveBtn}
                            >
                                Guardar Cambios
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Nueva Categoría */}
            {isAddingCategory && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h3 className={styles.modalTitle}>Nueva Categoría</h3>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Nombre de la categoría:</label>
                            <input
                                type="text"
                                value={newCategoryName}
                                onChange={(e) => setNewCategoryName(e.target.value)}
                                className={styles.input}
                                placeholder="Nombre de la categoría"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <div className={styles.subcategoryHeader}>
                                <label className={styles.label}>Subcategorías:</label>
                                <button
                                    type="button"
                                    onClick={addNewSubcategory}
                                    className={styles.addSubBtn}
                                >
                                    + Agregar subcategoría
                                </button>
                            </div>

                            <div className={styles.subcategoryList}>
                                {newSubcategories.map((subcat, index) => (
                                    <div key={index} className={styles.subcategoryItem}>
                                        <input
                                            type="text"
                                            value={subcat}
                                            onChange={(e) => updateNewSubcategory(index, e.target.value)}
                                            className={styles.subcategoryInput}
                                            placeholder="Nombre de subcategoría"
                                        />
                                        {newSubcategories.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeNewSubcategory(index)}
                                                className={styles.removeBtn}
                                                aria-label="Eliminar subcategoría"
                                            >
                                                ✕
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.modalActions}>
                            <button
                                onClick={handleCancelNew}
                                className={styles.cancelBtn}
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSaveNew}
                                className={styles.saveBtn}
                                disabled={!newCategoryName.trim()}
                            >
                                Crear Categoría
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* AlertCard Component */}
            {alertMessage && (
                <div className={styles.alertWrapper}>
                    {pendingDeleteId ? (
                        <div className={styles.confirmDialog}>
                            <AlertCard message={alertMessage} />
                            <div className={styles.confirmActions}>
                                <button
                                    onClick={cancelDelete}
                                    className={styles.cancelBtn}
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className={styles.deleteConfirmBtn}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <AlertCard message={alertMessage} />
                    )}
                </div>
            )}
        </div>
    );
}