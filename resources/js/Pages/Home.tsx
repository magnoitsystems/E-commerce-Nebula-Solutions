import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Carrusel from "../Components/File/Carrusel/Carrusel";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import CategoryList from "../Components/CategoriesList/CategoryList";
import HomeProducts from "../Components/HomeProducts/HomeProducts";
import styles from "./styles/HomeStyles.module.css"

function Home() {
    const images = [
        "/carruselImages/publi/Coca-Cola-nueva-imagen-1280x720.jpg",
        "/carruselImages/publi/spotify-podcast-1.webp"
    ];

    return (
        <main>
            <NavBar />
            <Breadcrumbs />
            <Carrusel images={images} />
            <CategoryList></CategoryList>
            <div className={styles.general}>
                <HomeProducts />
            </div>
            <Footer />
        </main>
    );
}

export default Home;



