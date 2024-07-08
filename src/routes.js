
import Favorito from "pages/Favoritos";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";

const { default: Inicio } = require("pages/Inicio");

const { BrowserRouter, Route, Routes } = require("react-router-dom");

function AppRoutes(){

    return(
        <BrowserRouter>
       
            <Routes>
              <Route path="/" element={<PaginaBase />}>
                <Route path="/" element={<Inicio />}> </Route>
              <Route  path="/favoritos" element={<Favorito />}> </Route>
              <Route path="/:id" element={<Player />}> </Route>
              <Route path="*" element={<NotFound />}> </Route>
                </Route> 
            
        </Routes>

         
        
     
       
        </BrowserRouter>
    )
}
export default AppRoutes;