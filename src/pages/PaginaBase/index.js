import Cabecera from "componentes/Cabecera/Cabecera";
import Container from "componentes/Container";
import Pie from "componentes/Pie";
import FavoritoProvider from "Context/Favorito";
import { Outlet } from "react-router-dom";

function PaginaBase(){
    return(
        <main>
            <Cabecera />
            <FavoritoProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritoProvider>
            <Pie />
        </main>

    )
}
export default PaginaBase;