// import File from "../src/component/File/File.tsx";
import './App.css'
import Footer from "./component/Footer/Footer.tsx";
import ProductGrid from './component/ProductCard/ProductGrid.tsx';

function App() {

  const products = [
    {
      id: 1,
      name: "Sombras de ojos",
      image: "/test-images/maybelline-combo.jpg",
      price: 15000,
      discountPrice: 10000,
      discountPercent: 25,
    },
    {
      id: 2,
      name: "Sombras de ojos",
      image: "/test-images/maybelline-combo.jpg",
      price: 15000,
    },
  ];

  return (
    // <File/>
    <main>
      <ProductGrid products={products} />
      <Footer></Footer>
    </main>

  )
}

export default App
