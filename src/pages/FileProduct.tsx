import File from "../component/File/File.tsx";
import NavBar from "../component/NavBar/NavBar.tsx";
import Footer from "../component/Footer/Footer.tsx";
import {useLocation, useParams} from "react-router-dom";
import Breadcrumbs from "../component/Breadcrumbs/Breadcrumbs.tsx";

type Prop = {
    image?: string[];
}

function FileProduct({ image: initialImages = [] } : Prop){
    const location = useLocation();
    const { id } = useParams();
    const mode = (location.state?.mode as "view" | "create" | "edit") || "view";

    const isEmptyFile = mode === "create" || id === "new";
    const isEditFile = mode === "edit";
    const isViewFile = mode === "view";

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