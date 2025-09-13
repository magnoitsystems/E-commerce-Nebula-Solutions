// import File from "../src/component/File/File.tsx";
import './App.css'
// import ProductList from './component/AdminProductsCard/ProductList.tsx';
// import CategoryCard from './component/CategoryCard/CategoryCard.tsx';
import Footer from "./component/Footer/Footer.tsx";
import ProductGrid from './component/ProductCard/ProductGrid.tsx';
import PurchaseList from './component/PurchaseList/PurchaseList.tsx';
import NavBar from "./component/NavBar/NavBar.tsx";

function App() {
  return (
    <main>
        <NavBar/>
      <PurchaseList />
      <ProductGrid />
      <Footer />
    </main>
  );
}

export default App;

