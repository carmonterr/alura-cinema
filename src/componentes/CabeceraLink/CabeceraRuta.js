import styles from "./CabeceraRuta.module.css"
const { Link } = require("react-router-dom");

function CabeceraRuta({url,children}){
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}
export default CabeceraRuta;