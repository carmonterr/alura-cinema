
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import Card from "componentes/Card";
import styles from "./Favoritos.module.css";
import { useFavoritosContext } from "Context/Favorito";

function Favorito(){
    
    const {favorito} = useFavoritosContext();

    return(
    <>
    <Banner img = "favorite" color="#AF7EAA"/>
    <Titulo>
        <h1>Mis Favoritos</h1>
    </Titulo>
    <section className={styles.container}>
        {favorito.map((fav)=>{
            return <Card {...fav} key={fav.id} />
        })}

    </section>
    </>

    );
}
export default Favorito;