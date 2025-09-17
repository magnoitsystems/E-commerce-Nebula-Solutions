import AllProducts from "../component/AllProducts/AllProducts";
import Footer from "../component/Footer/Footer";
import NavBar from "../component/NavBar/NavBar";

export default function Allproducts(){
    return(
        <main>
            <NavBar></NavBar>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </main>
    );
}