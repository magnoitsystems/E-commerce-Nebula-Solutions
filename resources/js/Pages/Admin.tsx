import ProductList from "../Components/AdminProductsCard/ProductList";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import CategoryCard from "../Components/CategoryCard/CategoryCard";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";

function Admin(){
return (
      <main>
          <NavBar/>
          <Breadcrumbs/>
          <CategoryCard></CategoryCard>
          <ProductList></ProductList>
          <Footer />
      </main>
    );
}

export default Admin;