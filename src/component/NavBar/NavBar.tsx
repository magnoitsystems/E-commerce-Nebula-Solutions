import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.main}>
                <div>
                    <img
                        src={'/logos/oneshop.png'}
                        alt="OneShop logo"
                    />
                </div>

                <div>

                </div>
            </div>

            <div className={styles.categories}>

            </div>
        </nav>
    )
}