import NavBar from "../component/NavBar/NavBar";
import LogUp from "../component/Forms/LogUp.tsx";
import styles from './Log.module.css';
import Footer from "../component/Footer/Footer.tsx";

export default function Logup() {
    return(
        <main className={styles.log}>
            <NavBar/>
            <LogUp/>
            <Footer/>
        </main>
    )
}