import styles from './CartCard.module.css';
import { X } from "lucide-react";

type Props = {
    src: string,
    alt: string,
    name: string,
    units: number,
    description: string,
    price: number,
}

export default function CartCard({src, alt, name, units, description, price}: Props) {
    return (
        <main className={styles.main}>
            <div className={styles.productImage}>
                <img src={src} alt={alt}/>
            </div>

            <div className={styles.productInfo}>
                <div className={styles.details}>
                    <h3>{name}</h3>

                    <div>
                        <h5>x{units} Unidad</h5>
                        <h6>{description}</h6>
                    </div>
                </div>

                <div>
                    <h2>${price},00</h2>
                </div>
            </div>

            <div className={styles.cross}>
                <X size={24} color="black" />
            </div>
        </main>
    )
}