import {useEffect, useState} from "react";
import styles from "./Carrusel.module.css";
import file from "../File.tsx";

type Prop = {
    isEditableFile: boolean,
    isEmptyFile: boolean,
    // onImagesChange?: (images: any[]) => void;
}

function Carrusel({ isEditableFile, isEmptyFile }: Prop){
    const images = [
        "/carruselImages/comboMaybeline.jpg",
        "/carruselImages/comboMaybeline2.jpg",
        "/carruselImages/comboMaybeline3.jpg",
    ]

    const hasImages = images.length > 0;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [imageToDelete, setImageToDelete] = useState<any>(null);

    const handleDeleteClick = (imageIdentifier: any) => {
        setImageToDelete(imageIdentifier);
        setShowConfirmModal(true);
    };

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
            {hasImages && (
                <img className={styles.imageProperties} style={{
                    width: '100%',
                    height: '100%',
                    objectFit:"cover",
                }} src={images[currentIndex]} alt={`Foto ${images[currentIndex]}`} />
            )}
            {hasImages && (
            <div className={styles.buttonCarruselProperties}>
                <button onClick={goToPrevious}><img src={"/icons/IconFlechaDireccionContraria.png"} alt={"Icon flecha carrusel"}/></button>
                <button onClick={goToNext}><img src={"/icons/IconFlecha.png"} alt={"Icon flecha carrusel"}/></button>
            </div>
            )}
            {hasImages && (
                <div className={styles.guiaCaruselProperties}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`${styles.guiaProperties} ${
                                index === currentIndex
                                    ? styles.indexProperties
                                    : styles.notIndexProperties
                            }`}
                        />
                    ))}
                </div>
            )}
            {hasImages && (isEditableFile || isEmptyFile) && (
                <div className={`${isEditableFile? styles.containerAddImage : ""} ${isEmptyFile? styles.containerAddImageForEmptyFile : ""}`}>
                    <div>
                        <input
                            type="file"
                            id="inputId"
                            className={styles.inputProperties}
                            // onChange={handleImageUpload}
                            accept="image/*"
                            // disabled={uploading}
                        />
                        <label htmlFor="inputId" className={styles.labelAddImageProperties}>
                            Añadir imagen
                            {/*{uploading ? 'Subiendo...' : 'Añadir imagen'}*/}
                        </label>
                    </div>
                    {hasImages && (
                        <div>
                            <button  onClick={() => handleDeleteClick(images[currentIndex])} className={styles.deleteIconProperties}>
                                <img src="/icons/deleteIcon.png" alt="Ícono de eliminar" width={20} height={24} />
                            </button>
                        </div>
                    )}
                </div>
            )}
            {!hasImages && (isEditableFile || isEmptyFile) && (
                <div className={`${styles.containerAddImageForEmptyFile} ${styles.withoutImageProperties}`}>
                    <div>
                        <input
                            type="file"
                            id="inputId"
                            className={styles.inputProperties}
                            // onChange={handleImageUpload}
                            accept="image/*"
                            // disabled={uploading}
                        />
                        <label htmlFor="inputId" className={styles.labelAddImageProperties}>
                            Añadir imagen
                        </label>
                    </div>
                </div>
            )}

            {(!isEmptyFile && !isEditableFile) && (
                <img
                    src={'/backgrounds/homeBackground.jpg'}
                    alt="Imagen propiedad"
                    className={`${styles.imageProperties} ${styles.imagePropertiesActive}`}
                    onError={(e) => {
                        console.error('Error al cargar imagen:', e);
                    }}
                />
            )}

            {images.length > 1 && (
                <div className={styles.buttonProperties}>
                    <button onClick={goToPrevious}>
                        <img src="/icons/IconFlechaDireccionContraria.png" alt="Flecha izquierda" width={30} height={30} />
                    </button>
                    <button onClick={goToNext}>
                        <img src="/icons/IconFlecha.png" alt="Flecha derecha" width={30} height={30} />
                    </button>
                </div>
            )}

            {showConfirmModal && imageToDelete && (
                <div className={styles.messageCardPropertie}>
                    <p>¿Desea eliminar la imagen?</p>
                    <p>Esta acción no se podrá deshacer.</p>
                    <div className={styles.buttonMessageProperties}>
                        {/*onClick={handleDeleteConfirmed}*/}
                        <button className={styles.aceptButtonProperties}>
                            Sí, deseo eliminarla
                        </button>
                        {/*onClick={handleCancelDelete}*/}
                        <button className={styles.cancelButtonProperties}>
                            No, gracias
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carrusel;