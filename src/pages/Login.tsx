import NavBar from "../component/NavBar/NavBar";
import LogIn from "../component/Forms/LogIn.tsx";
import styles from './Log.module.css';
import Footer from "../component/Footer/Footer.tsx";

export default function Login() {
    return(
        <main className={styles.log}>
            <NavBar/>
            <LogIn/>
            <Footer/>
        </main>
    )
}