import Footer from "../component/Footer/Footer.tsx";
import ProductGrid from '../component/ProductCard/ProductGrid.tsx';
import NavBar from "../component/NavBar/NavBar.tsx";
import Carrusel from "../component/File/Carrusel/Carrusel.tsx";
import CategoryList from "../component/CategoriesList/CategoryList.tsx";

function Home() {
    const images = [
        "/carruselImages/publi/Coca-Cola-nueva-imagen-1280x720.jpg",
        "/carruselImages/publi/spotify-podcast-1.webp"
    ];

    return (
      <main>
          <NavBar/>
          <Carrusel images={images} />
          <CategoryList></CategoryList>
          <ProductGrid />
          <Footer />
      </main>
    );
}

export default Home;

