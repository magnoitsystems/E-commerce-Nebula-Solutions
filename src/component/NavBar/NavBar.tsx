"use client";

import { useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const [openCategories, setOpenCategories] = useState(false);
    const [openUser, setOpenUser] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.main}>
                <div className={styles.logo}>
                    <img src={"/logos/oneshop.png"} alt="OneShop logo" />
                </div>

                <div className={styles.categories}>
                    <h5>Inicio</h5>
                    <h5 onClick={() => {
                        setOpenCategories(!openCategories);
                        setOpenUser(false); // cierro user si abro productos
                    }}>
                        Productos
                    </h5>
                    <h5>Mi carrito</h5>
                </div>

                <div className={styles.user}>
                    <img
                        src={"/icons/user-circle.png"}
                        alt="User Logo"
                        onClick={() => {
                            setOpenUser(!openUser);
                            setOpenCategories(false); // cierro productos si abro user
                        }}
                    />
                </div>
            </div>

            {/* desplegable Productos */}
            {openCategories && (
                <div className={styles.allCategories}>
                    <div className={styles.category}>
                        <h6>Maquillaje</h6>
                        <p>Labiales</p>
                        <p>Polvos compactos</p>
                        <p>Sombras de ojos</p>
                        <p>Bronzers/Contornos</p>
                        <p>Delineadores</p>
                    </div>

                    <div className={styles.category}>
                        <h6>Electrodomésticos</h6>
                        <p>Lavarropas</p>
                        <p>Heladeras</p>
                        <p>Microondas</p>
                        <p>Hornos eléctricos</p>
                        <p>Pequeños electrodomésticos</p>
                        <p>Secarropas</p>
                        <p>Termotanques</p>
                    </div>

                    <div className={styles.category}>
                        <h6>Audio y visual</h6>
                        <p>TV smart</p>
                        <p>Auriculares</p>
                        <p>Parlantes</p>
                        <p>Celulares</p>
                        <p>Tablets</p>
                    </div>

                    <div className={styles.category}>
                        <h6>Vehículos</h6>
                        <p>Camionetas</p>
                        <p>Autos</p>
                        <p>Motocicletas</p>
                        <p>Cuatriciclos</p>
                        <p>Camiones</p>
                        <p>UTVs</p>
                    </div>

                    <div className={styles.category}>
                        <h6>Maquillaje</h6>
                        <p>Labiales</p>
                        <p>Polvos compactos</p>
                        <p>Sombras de ojos</p>
                        <p>Bronzers/Contornos</p>
                        <p>Delineadores</p>
                    </div>

                    <div className={styles.category}>
                        <h6>Electrodomésticos</h6>
                        <p>Lavarropas</p>
                        <p>Heladeras</p>
                        <p>Microondas</p>
                        <p>Hornos eléctricos</p>
                        <p>Pequeños electrodomésticos</p>
                        <p>Secarropas</p>
                        <p>Termotanques</p>
                    </div>

                    <div className={styles.category}>
                        <h6>Audio y visual</h6>
                        <p>TV smart</p>
                        <p>Auriculares</p>
                        <p>Parlantes</p>
                        <p>Celulares</p>
                        <p>Tablets</p>
                    </div>

                    <div className={styles.category}>
                        <h6>Vehículos</h6>
                        <p>Camionetas</p>
                        <p>Autos</p>
                        <p>Motocicletas</p>
                        <p>Cuatriciclos</p>
                        <p>Camiones</p>
                        <p>UTVs</p>
                    </div>
                </div>
            )}

            {/* desplegable User */}
            {openUser && (
                <div className={styles.log}>
                    <h5>Carrito de compras</h5>
                    <h5>Historial de compras</h5>
                    <h5>Cerrar sesión</h5>
                </div>
            )}
        </nav>
    );
}
