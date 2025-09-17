import Footer from "../component/Footer/Footer";
import NavBar from "../component/NavBar/NavBar";
import PurchaseList from "../component/PurchaseList/PurchaseList";
import Breadcrumbs from "../component/Breadcrumbs/Breadcrumbs.tsx";

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