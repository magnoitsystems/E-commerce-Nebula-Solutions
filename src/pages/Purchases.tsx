import Footer from "../component/Footer/Footer";
import NavBar from "../component/NavBar/NavBar";
import PurchaseList from "../component/PurchaseList/PurchaseList";

function Purchases(){
    return(
          <main>
          <NavBar/>
          <PurchaseList></PurchaseList>
          <Footer />
      </main>
    );
}

export default Purchases;