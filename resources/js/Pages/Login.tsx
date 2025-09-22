import NavBar from "../component/NavBar/NavBar";
import LogIn from "../component/Forms/LogIn.tsx";
import styles from './styles/Log.module.css';
import Footer from "../component/Footer/Footer.tsx";
import Breadcrumbs from "../component/Breadcrumbs/Breadcrumbs.tsx";

export default function Login() {
    return(
        <main className={styles.log}>
            <NavBar/>
            <Breadcrumbs/>
            <LogIn/>
            <Footer/>
        </main>
    )
}