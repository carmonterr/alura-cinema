import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./logo-alura.png";
import CabeceraRuta from "../CabeceraLink/CabeceraRuta";
function Cabecera(){
    return(
      <header className={styles.cabecera}>
        <Link to="/">
        <section className={styles.logoContainer}>
            <img src={logo} alt="Logo Alura"/> <span>Cinema</span>
        </section>
        </Link>
        <nav>
            <CabeceraRuta url="./">
            Home
            </CabeceraRuta>
            <CabeceraRuta url="./Favoritos">
             Favoritos
            </CabeceraRuta>
        </nav>
      </header>
    )
}

export default Cabecera;