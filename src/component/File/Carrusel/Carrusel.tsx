import { useEffect, useState } from "react";
import styles from "./Carrusel.module.css";

type CarruselProps = {
    images: string[];          // array de imágenes que le pasás
    interval?: number;         // tiempo en ms para autoplay (opcional)
};

function Carrusel({ images, interval = 3000 }: CarruselProps) {
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
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!isAutoPlaying || images.length <= 1) return;

        const autoplay = setInterval(() => {
            goToNext();
        }, interval);

        return () => clearInterval(autoplay);
    }, [currentIndex, isAutoPlaying, images, interval]);

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <div
            className={styles.carruselProperties}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                className={styles.imageProperties}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
                src={images[currentIndex]}
                alt={`Foto ${currentIndex + 1}`}
            />

            {images.length > 1 && (
                <div className={styles.buttonCarruselProperties}>
                    <button onClick={goToPrevious}>
                        <img
                            src={"/icons/IconFlechaDireccionContraria.png"}
                            alt={"Icon flecha carrusel"}
                        />
                    </button>
                    <button onClick={goToNext}>
                        <img
                            src={"/icons/IconFlecha.png"}
                            alt={"Icon flecha carrusel"}
                        />
                    </button>
                </div>
            )}

            {images.length > 1 && (
                <div className={styles.guiaCaruselProperties}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`${styles.guiaProperties} ${
                                index === currentIndex ? styles.indexProperties : ""
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Carrusel;
