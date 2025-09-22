import Carrusel from "./Carrusel/Carrusel";
import styles from "./File.module.css";
import Commentary from "./Commentary/Commentary";
import {useState} from "react";
import EditableTextFiel from "./EditableFile/EditableTextFiel";
import AlertCard from "../AlertCard/AlertCard";
// import AlertCard from "../AlertCard/AlertCard.tsx";

type ProductProps = {
    mode: 'view' | 'create' | 'edit';
    images: string[];
    productId: any;
};

interface ProductState {
    productName: string;
    price: string;
    description: string;
}

function File({ mode, images, productId }: ProductProps){
    const [editingField, setEditingField] = useState<string | null>(null);
    console.log(productId);

    const isEmptyFile = mode === "create";
    const isEditableFile = mode === "edit";

    const initialProduct = {
        images: [],
        productName: "Nombre del producto",
        description: "Descripción del producto...",
        id: 0,
        price: "0",
    };

    const [localProperty, setLocalProperty] = useState<ProductState>({
        productName: isEmptyFile ? initialProduct.productName : "Combo Maybeline NY",
        price: isEmptyFile ? initialProduct.price : "10.000",
        description: isEmptyFile ? initialProduct.description : "Un set pensado para que tengas el tono justo en cada momento. Los colores van desde nudes suaves hasta intensos vibrantes, todos con buena pigmentación y una textura cómoda que no reseca. Se aplican fácil, se fijan rápido y duran varias horas. Podés usarlos solos o mezclarlos entre sí para looks más creativos. Formato práctico: ideales para llevar en la cartera."
    });

    const [show, setShowAlertCard] = useState(false);
    const [message, setMessage] = useState("");

    const showAlertCard = (message: string) => {
        setShowAlertCard(true);
        setMessage(message);
    }

    // Función genérica para guardar cualquier campo
    const handleSave = (field: keyof ProductState) => (value: string) => {
        setLocalProperty(prev => ({ ...prev, [field]: value }));
        setEditingField(null);
    };

    const handleCancelEdit = () => {
        setLocalProperty({
            productName: isEmptyFile ? initialProduct.productName : "Combo Maybeline NY",
            price: isEmptyFile ? initialProduct.price : "10.000",
            description: isEmptyFile ? initialProduct.description : "\"Un set pensado para que tengas el tono justo en cada momento. Los colores van desde nudes suaves hasta intensos vibrantes, todos con buena pigmentación y una textura cómoda que no reseca.\\n\" +\n" +
                "                            \"Se aplican fácil, se fijan rápido y duran varias horas.\\n\" +\n" +
                "                            \"Podés usarlos solos o mezclarlos entre sí para looks más creativos.\\n\" +\n" +
                "                            \"Formato práctico: ideales para llevar en la cartera.\""
        });
        setEditingField(null);
    };

    const handleStartEdit = (field: string) => {
        setEditingField(field);
    };

    return(
        <div className={styles.containerProperties}>
            {show && (
                <AlertCard message={message} onClose={function (): void {
                    throw new Error("Function not implemented.");
                } } />
            )}
            <div className={styles.titleAndCarruselProperties}>
                <div className={styles.titleAndEditButtonProperties}>
                    {(isEmptyFile || isEditableFile) && editingField === 'productName' ? (
                        <EditableTextFiel
                            value={localProperty.productName}
                            isEditing={editingField === 'productName'}
                            type={"text"}
                            onSave={handleSave('productName')}
                            onCancel={handleCancelEdit}
                            className={styles.inputProperties}
                        />
                    ) : (
                        <h1 className={styles.productNameProperties} onClick={() => handleStartEdit('productName')}>
                            {isEditableFile || isEmptyFile? localProperty.productName : "Combo Maybeline NY"}
                        </h1>
                    )}

                    {(isEditableFile || isEmptyFile) && (
                        <button
                            className={styles.buttonEditProperties}
                            onClick={() => handleStartEdit('productName')}
                        >
                            <img
                                src={"/icons/editButtonIcon.png"}
                                alt={"Botón para editar"}
                                width={35}
                                height={35}
                            />
                        </button>
                    )}
                </div>
                <Carrusel images={images} isEditableFile={isEditableFile} isEmptyFile={isEmptyFile}/>
            </div>

            <div className={styles.priceAndCartButtonProperties}>
                <div>
                    {(isEmptyFile || isEditableFile) && editingField === 'price' ? (
                        <EditableTextFiel
                            value={localProperty.price}
                            isEditing={editingField === 'price'}
                            type={"text"}
                            onSave={handleSave('price')}
                            onCancel={handleCancelEdit}
                            className={styles.inputProperties}
                        />
                    ) : (
                        <span onClick={() => handleStartEdit('price')}>
                           ${isEditableFile || isEmptyFile? localProperty.price : "10.000"}
                        </span>
                    )}

                    {(isEditableFile || isEmptyFile) && (
                        <button
                            className={styles.buttonEditProperties}
                            onClick={() => handleStartEdit('price')}
                        >
                            <img
                                src={"/icons/editButtonIcon.png"}
                                alt={"Botón para editar"}
                                width={35}
                                height={35}
                            />
                        </button>
                    )}
                </div>

                <button className={styles.cartButtonProperties}>
                    {isEmptyFile && (
                        <span onClick={() => showAlertCard("Publicación generada con éxito")}>Generar publicación</span>
                    )}
                    {isEditableFile && (
                        <span onClick={() => showAlertCard("Cambios guardados con éxito")}>Guardar cambios</span>
                    )}
                    {!isEditableFile && !isEmptyFile && (
                        <span onClick={() => showAlertCard("El producto se ha agregado con éxito")}>Agregar al carrito</span>
                        // <img src={"/icons/carritoIcon.png"}/>
                    )}
                </button>

            </div>

            <div className={styles.descriptionProperties}>
                <div className={styles.descriptionSectionProperties}>
                    <h2>Descripción</h2>
                    {(isEditableFile || isEmptyFile) && (
                        <button
                            className={styles.buttonEditProperties}
                            onClick={() => handleStartEdit('description')}
                        >
                            <img
                                src={"/icons/editButtonIcon.png"}
                                alt={"Botón para editar"}
                                width={35}
                                height={35}
                            />
                        </button>
                    )}
                </div>
                <div className={styles.underlineProperties}/>

                {(isEmptyFile || isEditableFile) && editingField === 'description' ? (
                    <div className={styles.containerInputProperties}>
                        <EditableTextFiel
                            value={localProperty.description}
                            isEditing={editingField === 'description'}
                            type={"text"}
                            onSave={handleSave('description')}
                            onCancel={handleCancelEdit}
                            className={styles.inputProperties}
                        />
                    </div>
                ) : (
                    <div className={styles.descriptionSpanProperties}>
                          <span onClick={() => handleStartEdit('description')}>
                        {isEditableFile || isEmptyFile ? localProperty.description : "Un set pensado para que tengas el tono justo en cada momento. Los colores van desde nudes suaves hasta intensos vibrantes, todos con buena pigmentación y una textura cómoda que no reseca.\n" +
                            "Se aplican fácil, se fijan rápido y duran varias horas.\n" +
                            "Podés usarlos solos o mezclarlos entre sí para looks más creativos.\n" +
                            "Formato práctico: ideales para llevar en la cartera."}
                          </span>
                    </div>
                )}
            </div>

            {!isEmptyFile && !isEditableFile && (
                <div className={styles.commentarySectionProperties}>
                    <h2>Comentarios</h2>
                    <div className={styles.underlineProperties}/>
                    <Commentary/>
                </div>
            )}
        </div>
    );
}

export default File;