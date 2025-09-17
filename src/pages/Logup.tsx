import NavBar from "../component/NavBar/NavBar";
import LogUp from "../component/Forms/LogUp.tsx";
import styles from './styles/Log.module.css';
import Footer from "../component/Footer/Footer.tsx";
import Breadcrumbs from "../component/Breadcrumbs/Breadcrumbs.tsx";

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