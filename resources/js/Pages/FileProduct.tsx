import File from "../Components/File/File";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import {useLocation, useParams} from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";

type Prop = {
    image?: string[];
}

function FileProduct({ image: initialImages = [] } : Prop){
    const location = useLocation();
    const { id } = useParams();
    const mode = (location.state?.mode as "view" | "create" | "edit") || "view";

    const isEmptyFile = mode === "create";
    // const isEditFile = mode === "edit";
    // const isViewFile = mode === "view";

    const images = isEmptyFile ? [] : initialImages;

    return(
        <main>
            <NavBar />
            <Breadcrumbs />
            <File mode={mode} images={images} productId={id}/>
            <Footer />
        </main>
    );
}

export default FileProduct;