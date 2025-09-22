import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import PurchaseList from "../Components/PurchaseList/PurchaseList";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";

function Purchases(){
    return(
          <main>
          <NavBar/>
              <Breadcrumbs/>
          <PurchaseList></PurchaseList>
          <Footer />
      </main>
    );
}

export default Purchases;