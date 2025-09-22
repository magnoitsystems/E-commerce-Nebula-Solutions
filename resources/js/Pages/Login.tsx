import NavBar from "../Components/NavBar/NavBar";
import LogIn from "../Components/Forms/LogIn";
import styles from './styles/Log.module.css';
import Footer from "../Components/Footer/Footer";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";

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