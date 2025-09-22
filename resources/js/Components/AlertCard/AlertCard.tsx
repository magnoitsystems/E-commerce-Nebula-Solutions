import styles from "./AlertCard.module.css";
import { useState } from "react";

type Prop = {
    message: string;
    onClose: () => void; 
};

function AlertCard({ message, onClose }: Prop) {
    const [view, setView] = useState(true);

    const handleClose = () => {
        setView(false);
        onClose(); 
    };

    return (
        view && (
            <div className={styles.alertCardContainerProperties}>
                <div className={styles.closeButtonProperties}>
                    <button onClick={handleClose}>
                        <img
                            src={"/icons/closeButton.png"}
                            alt={"Botón para cerrar"}
                        />
                    </button>
                </div>
                <div className={styles.messageAndLogoProperties}>
                    <span>{message}</span>
                    <img src={"/logos/logoSitio.png"} alt={"logo del sitio"} />
                </div>
            </div>
        )
    );
}

export default AlertCard;
