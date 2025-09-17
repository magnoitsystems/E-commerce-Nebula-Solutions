import Footer from "../component/Footer/Footer.tsx";
import NavBar from "../component/NavBar/NavBar.tsx";
import Carrusel from "../component/File/Carrusel/Carrusel.tsx";
import Breadcrumbs from "../component/Breadcrumbs/Breadcrumbs.tsx";
import CategoryList from "../component/CategoriesList/CategoryList.tsx";
import HomeProducts from "../component/HomeProducts/HomeProducts.tsx";
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

