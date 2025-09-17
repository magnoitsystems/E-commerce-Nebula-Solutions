import styles from "./AlertCard.module.css";
import {useState} from "react";

type Prop = {
    message: string;
}

function AlertCard({message}: Prop){
    const [view, isView] = useState(true);

    const handleClose = () => {
        isView(false);
    }
    return(
        view && (
            <div className={styles.alertCardContainerProperties}>
                <div className={styles.closeButtonProperties}>
                    <button onClick={handleClose}><img src={"/icons/closeButton.png"} alt={"Botón para cerrar"}/></button>
                </div>
                <span>{message}</span>
                <img src={"/logos/logoSitio.png"}/>
            </div>
        )
    );
}

export default AlertCard;
