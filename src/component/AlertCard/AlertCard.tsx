import styles from "./AlertCard.module.css";
import { useState } from "react";

type Props = {
    message: string;
    buttonText1?: string;
    buttonText2?: string;
    onAction1?: () => void;
    onAction2?: () => void;
};

function AlertCard({
                                  message,
                                  buttonText1,
                                  buttonText2,
                                  onAction1,
                                  onAction2,
                              }: Props) {
    const [view, setView] = useState(true);

    const handleClose = () => {
        setView(false);
        if (onAction2) {
            onAction2();
        }
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
                {onAction1 != null && onAction2 != null && (
                    <div className={styles.actionsContainer}>
                        <button
                            onClick={() => {
                                setView(false);
                                onAction1();
                            }}
                            className={styles.actionButton}
                        >
                            {buttonText1}
                        </button>
                        <button
                            onClick={() => {
                                setView(false);
                                onAction2();
                            }}
                            className={styles.actionButton}
                        >
                            {buttonText2}
                        </button>
                    </div>
                )}
            </div>
        )
    );
}

export default AlertCard;
