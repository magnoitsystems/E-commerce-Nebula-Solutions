import ProductList from "../component/AdminProductsCard/ProductList";
import CategoryCard from "../component/CategoryCard/CategoryCard";
import Footer from "../component/Footer/Footer";
import NavBar from "../component/NavBar/NavBar";

function Admin(){
return (
      <main>
          <NavBar/>
          <CategoryCard></CategoryCard>
          <ProductList></ProductList>
          <Footer />
      </main>
    );
}

export default Admin;