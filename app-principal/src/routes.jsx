import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Localização from './pages/localizacao'
import Carrinho from './pages/carrinho'


function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="" element={ <Home /> }></Route>
                <Route path="/carrinho" element={ <Carrinho /> }></Route>
                <Route path="/localizacao" element={ <Localização /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes