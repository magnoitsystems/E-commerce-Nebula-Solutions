import CartCard from "../component/CartCard/CartCard";
import NavBar from "../component/NavBar/NavBar";
import styles from './styles/Cart.module.css';
import BuySection from "../component/BuySection/BuySection.tsx";
import Breadcrumbs from "../component/Breadcrumbs/Breadcrumbs.tsx";

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