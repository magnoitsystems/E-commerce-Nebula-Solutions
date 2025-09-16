import File from "../component/File/File.tsx";
import NavBar from "../component/NavBar/NavBar.tsx";
import Footer from "../component/Footer/Footer.tsx";

function FileProduct(){
    return(
        <main>
            <NavBar />
            <File mode={"create"}/>
            <Footer />
        </main>
    );
}

export default FileProduct;