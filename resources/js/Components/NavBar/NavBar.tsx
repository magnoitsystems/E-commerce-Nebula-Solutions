"use client";

import { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "@inertiajs/react";

export default function NavBar() {
    const [openCategories, setOpenCategories] = useState(false);
    const [openUser, setOpenUser] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.main} style={{
                borderRadius: active ? "20px 20px 0 0" : "20px",
            }}>
                <div className={styles.logo}>
                    <Link href="/">
                        <img src={"/logos/oneshop.png"} alt="OneShop logo" />
                    </Link>
                </div>

                <div className={styles.categories}>
                    <Link href="/">
                        <h5>Inicio</h5>
                    </Link>
                    <h5 onClick={() => {
                        setOpenCategories(!openCategories);
                        setOpenUser(false);
                        setActive(!active);
                    }}
                    >
                        Productos
                    </h5>
                    <h5>
                        <Link href="/micarrito">Mi carrito</Link>
                    </h5>
                    <div className={styles.user}>
                        <img
                            src={"/icons/user-circle.png"}
                            alt="User Logo"
                            onClick={() => {
                                setOpenUser(!openUser);
                                setOpenCategories(false);
                            }}
                        />
                    </div>
                </div>

                <div className={styles.user}>
                    <img
                        src={"/icons/user-circle.png"}
                        alt="User Logo"
                        onClick={() => {
                            setOpenUser(!openUser);
                            setOpenCategories(false);
                        }}
                    />
                </div>
            </div>

            {/* desplegable Productos */}
            {openCategories && (
                <div className={styles.allCategories}>
                    <div className={styles.category}>
                        <Link href="/productsByCategory/maquillaje">
                            <h6>Maquillaje</h6>
                        </Link>
                        <Link href="/productsByCategory/artístico">
                            <p>Artístico</p>
                        </Link>
                        <Link href="/productsByCategory/social">
                            <p>Social</p>
                        </Link>
                    </div>

                    <div className={styles.category}>
                        <Link href="/productsByCategory/electrodomesticos">
                            <h6>Electrodomésticos</h6>
                        </Link>
                        <Link href="/productsByCategory/cocina">
                            <p>Cocina</p>
                        </Link>
                        <Link href="/productsByCategory/limpieza">
                            <p>Limpieza</p>
                        </Link>
                    </div>

                    <div className={styles.category}>
                        <Link href="/productsByCategory/deportivo">
                            <h6>Deportivo</h6>
                        </Link>
                        <Link href="/productsByCategory/fútbol">
                            <p>Fútbol</p>
                        </Link>
                        <Link href="/productsByCategory/running">
                            <p>Running</p>
                        </Link>
                        <Link href="/productsByCategory/natación">
                            <p>Natación</p>
                        </Link>
                    </div>

                    <div className={styles.category}>
                        <Link href="/productsByCategory/vehiculos">
                            <h6>Vehículos</h6>
                        </Link>
                        <Link href="/productsByCategory/camionetas">
                            <p>Camionetas</p>
                        </Link>
                        <Link href="/productsByCategory/autos">
                            <p>Autos</p>
                        </Link>
                        <Link href="/productsByCategory/útiles">
                            <p>Útiles</p>
                        </Link>
                    </div>

                    <div className={styles.category}>
                        <Link href="/productsByCategory/decoración">
                            <h6>Decoración</h6>
                        </Link>
                        <Link href="/productsByCategory/muebles">
                            <p>Muebles</p>
                        </Link>
                        <Link href="/productsByCategory/adornos">
                            <p>Adornos</p>
                        </Link>
                    </div>

                    <div className={styles.category}>
                        <Link href="/productsByCategory/mochilas">
                            <h6>Mochilas</h6>
                        </Link>
                        <Link href="/productsByCategory/escolares">
                            <p>Escolares</p>
                        </Link>
                        <Link href="/productsByCategory/tote-bags">
                            <p>Tote Bags</p>
                        </Link>
                        <Link href="/productsByCategory/carteras">
                            <p>Carteras</p>
                        </Link>
                    </div>

                    <div className={styles.category}>
                        <Link href="/productsByCategory/indumentaria">
                            <h6>Indumentaria</h6>
                        </Link>
                        <Link href="/productsByCategory/remeras">
                            <p>Remeras</p>
                        </Link>
                        <Link href="/productsByCategory/jeans">
                            <p>Jeans</p>
                        </Link>
                        <Link href="/productsByCategory/zapatillas">
                            <p>Zapatillas</p>
                        </Link>
                    </div>

                    <div className={styles.category}>
                        <Link href="/productsByCategory/tecnología">
                            <h6>Tecnología</h6>
                        </Link>
                        <Link href="/productsByCategory/celulares">
                            <p>Celulares</p>
                        </Link>
                        <Link href="/productsByCategory/computadoras">
                            <p>Computadoras</p>
                        </Link>
                        <Link href="/productsByCategory/periféricos">
                            <p>Periféricos</p>
                        </Link>
                    </div>

                    <div className={styles.category}>
                        <Link href="/productsByCategory/música">
                            <h6>Música</h6>
                        </Link>
                        <Link href="/productsByCategory/instrumentos">
                            <p>Instrumentos</p>
                        </Link>
                        <Link href="/productsByCategory/discos">
                            <p>Discos</p>
                        </Link>
                    </div>
                </div>
            )}

            {/* desplegable User */}
            {openUser && (
                <div className={styles.log}>
                    <Link href="/purchases">
                        <h5>Mis compras</h5>
                    </Link>
                    <Link href="/login">
                        <h5>Iniciar sesión</h5>
                    </Link>
                </div>
            )}
        </nav>
    );
}
