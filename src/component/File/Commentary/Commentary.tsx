import styles from "./Commentary.module.css";

function Commentary(){
    return(
        <div className={styles.commentarySectionProperties}>
            <div className={styles.formCommentaryProperties}>
                <div className={styles.userProperties}>
                    <img src={"/icons/user-circle.png"} alt={"User icon"} width={40} height={40}/>
                    <span>Manuel Torres</span>
                </div>
                <div className={styles.formProperties}>
                    <input className={styles.inputProperties} type={"text"} name={"commentary"} placeholder={"Escribe un comentario..."}/>
                    <button className={styles.buttonProperties}><img src={"/icons/IconFlecha.png"} alt={"Botón para enviar un comentario"} width={15} height={20}/></button>
                </div>
            </div>

            <div className={styles.commentariesProperties}>
                <div className={styles.commentaryUserProperties}>
                    <div>
                        <img src={"/icons/user-circle.png"} alt={"User icon"} width={40} height={40}/>
                    </div>
                    <div className={styles.userAndCommentaryProperties}>
                        <span className={styles.userNameProperties}>Manuel Torres</span>
                        <span>¡Muy buen combo! ¡Se lo compré como regalo de cumpleaños a mi novia y le encantó!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Commentary;