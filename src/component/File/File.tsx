import Carrusel from "./Carrusel/Carrusel.tsx";
import styles from "./File.module.css";
import Commentary from "./Commentary/Commentary.tsx";

function File(){
    return(
        <div className={styles.containerProperties}>
            <div className={styles.titleAndCarruselProperties}>
                <h1>Combo labiales Maybeline NY</h1>
                <Carrusel/>
            </div>
            <div className={styles.priceAndCartButtonProperties}>
                <span>$10.000</span>
                <button className={styles.cartButtonProperties}>Agregar al carrito <img src={"/icons/carritoIcon.png"}/></button>
            </div>
            <div className={styles.descriptionProperties}>
                <h2>Descripción</h2>
                <span>Un set pensado para que tengas el tono justo en cada momento. Los colores van desde nudes suaves hasta intensos vibrantes, todos con buena pigmentación y una textura cómoda que no reseca.
                Se aplican fácil, se fijan rápido y duran varias horas.
                Podés usarlos solos o mezclarlos entre sí para looks más creativos.
                Formato práctico: ideales para llevar en la cartera.</span>
            </div>
            <div>
                <Commentary/>
            </div>
        </div>
    );
}

export default File;