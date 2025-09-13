import './App.css'
import Footer from "./component/Footer/Footer.tsx";
import ProductGrid from './component/ProductCard/ProductGrid.tsx';
import NavBar from "./component/NavBar/NavBar.tsx";
import Carrusel from "./component/File/Carrusel/Carrusel.tsx";

function App() {
    const images = [
        "/carruselImages/publi/Coca-Cola-nueva-imagen-1280x720.jpg",
        "/carruselImages/publi/spotify-podcast-1.webp"
    ];

    return (
      <main>
          <NavBar/>
          <Carrusel images={images} interval={2000}/>
          <ProductGrid />
          <Footer />
      </main>
    );
}

export default App;

