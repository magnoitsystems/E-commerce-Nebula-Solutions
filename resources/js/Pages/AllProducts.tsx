import AllProducts from "../Components/AllProducts/AllProducts";
import CategoryList from "../Components/CategoriesList/CategoryList";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
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