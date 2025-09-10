import {useEffect, useState} from "react";
import styles from "./Carrusel.module.css";

function Carrusel(){
    const images = [
        "/carruselImages/comboMaybeline.jpg",
        "/carruselImages/comboMaybeline2.jpg",
        "/carruselImages/comboMaybeline3.jpg",

    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Función para ir a la imagen anterior
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    // Función para ir a la imagen siguiente
    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    // Función para ir a una imagen específica
    const goToSlide = (index:any) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            goToNext();
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return(
        <div className={styles.carruselProperties} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img className={styles.imageProperties} style={{
                width: '100%',
                height: '100%',
                objectFit:"cover",
            }} src={images[currentIndex]} alt={`Foto ${images[currentIndex]}`} />
            {images.length > 1 && (
            <div className={styles.buttonCarruselProperties}>
                <button onClick={goToPrevious}><img src={"/icons/IconFlechaDireccionContraria.png"} alt={"Icon flecha carrusel"}/></button>
                <button onClick={goToNext}><img src={"/icons/IconFlecha.png"} alt={"Icon flecha carrusel"}/></button>
            </div>
            )}
            {images.length > 1 && (
                <div className={styles.guiaCaruselProperties}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`${styles.guiaProperties} ${
                                index === currentIndex
                                    ? styles.indexProperties
                                    : ''
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Carrusel;