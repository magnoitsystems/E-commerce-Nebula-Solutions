import AllProducts from "../component/AllProducts/AllProducts";
import CategoryList from "../component/CategoriesList/CategoryList";
import Footer from "../component/Footer/Footer";
import NavBar from "../component/NavBar/NavBar";
import styles from "./styles/HomeStyles.module.css";

export default function Allproducts() {
    return (
        <main>
            <NavBar></NavBar>
            <div className={styles.general}>
                <CategoryList ></CategoryList>
            </div>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </main>
    );
}