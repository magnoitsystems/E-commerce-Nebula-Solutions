import CartCard from "../Components/CartCard/CartCard";
import NavBar from "../Components/NavBar/NavBar";
import styles from './styles/Cart.module.css';
import BuySection from "../Components/BuySection/BuySection";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";

export default function Cart () {
    return (
        <main>
            <NavBar/>
            <Breadcrumbs/>
            <section className={styles.content}>
                <div className={styles.itemsGrid}>
                    <CartCard
                        src={'/test-images/sunkisser.jpg'}
                        alt={'sunkisser maybelline'}
                        name={'Rubor Sunkisser Maybelline'}
                        units={1}
                        description={'Rubor Sunkisser de Maybelline NY en tono 001. x1u'}
                        price={37.876}
                    />

                    <CartCard
                        src={'/test-images/falsies.jpg'}
                        alt={'falsies maybelline'}
                        name={'Máscara de pestañas Falsies Maybelline'}
                        units={1}
                        description={'Máscara de pestañas Falsies Maybelline Washable tono 001. x1u'}
                        price={27.566}
                    />
                </div>

                <div className={styles.buy}>
                    <BuySection
                        productsQuantity={2}
                        shipments={2}
                        price={293.134}
                    />
                </div>
            </section>
        </main>
    )
}