import NavBar from "../Components/NavBar/NavBar";
import LogUp from "../Components/Forms/LogUp";
import styles from './styles/Log.module.css';
import Footer from "../Components/Footer/Footer";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";

export default function Logup() {
    return(
        <main className={styles.log}>
            <NavBar/>
            <Breadcrumbs/>
            <LogUp/>
            <Footer/>
        </main>
    )
}