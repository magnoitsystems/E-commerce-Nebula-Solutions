import Carrusel from "./Carrusel/Carrusel.tsx";
import styles from "./File.module.css";
import Commentary from "./Commentary/Commentary.tsx";
import {useState} from "react";
import EditableTextFiel from "./EditableFile/EditableTextFiel.tsx";

type ProductProps = {
    mode: 'view' | 'create' | 'edit';
};

interface ProductState {
    productName: string;
    price: string;
    description: string;
}

function File({ mode }: ProductProps){
    const [editingField, setEditingField] = useState<string | null>(null);

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
        productName: initialProduct.productName || '',
        price: initialProduct.price || '',
        description: initialProduct.description || ''
    });

    // Función genérica para guardar cualquier campo
    const handleSave = (field: keyof ProductState) => (value: string) => {
        setLocalProperty(prev => ({ ...prev, [field]: value }));
        setEditingField(null);
    };

    const handleCancelEdit = () => {
        setLocalProperty({
            productName: initialProduct.productName || '',
            price: initialProduct.price || '',
            description: initialProduct.description || ''
        });
        setEditingField(null);
    };

    const handleStartEdit = (field: string) => {
        setEditingField(field);
    };

    return(
        <div className={styles.containerProperties}>
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
                <Carrusel images={[  "/carruselImages/comboMaybeline.jpg",
                        "/carruselImages/comboMaybeline2.jpg",
                        "/carruselImages/comboMaybeline3.jpg"]} isEditableFile={isEditableFile} isEmptyFile={isEmptyFile}/>
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
                {!isEditableFile && !isEmptyFile && (
                    <button className={styles.cartButtonProperties}>
                        {/*Agregar al carrito*/}
                        <img src={"/icons/carritoIcon.png"}/>
                    </button>
                )}
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
                    <EditableTextFiel
                        value={localProperty.description}
                        isEditing={editingField === 'description'}
                        type={"text"}
                        onSave={handleSave('description')}
                        onCancel={handleCancelEdit}
                        className={styles.inputProperties}
                    />
                ) : (
                    <span onClick={() => handleStartEdit('description')}>
                        {isEditableFile || isEmptyFile ? localProperty.description : "Un set pensado para que tengas el tono justo en cada momento. Los colores van desde nudes suaves hasta intensos vibrantes, todos con buena pigmentación y una textura cómoda que no reseca.\n" +
                            "Se aplican fácil, se fijan rápido y duran varias horas.\n" +
                            "Podés usarlos solos o mezclarlos entre sí para looks más creativos.\n" +
                            "Formato práctico: ideales para llevar en la cartera."}
                    </span>
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