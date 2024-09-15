import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/Index";
import Carteiras from "../pages/Carteiras/Index";
import GerenciametoAtivo from "../pages/GerenciamentoAtivos/Index";
import AnaliseGrafica from "../pages/AnaliseGrafica/Index";

function AppRouter() {
    return ( 
        <Routes>
            <Route path = "/" element ={<HomePage />} />
            <Route path = "/Carteiras" element = {<Carteiras />} />
            <Route path = "/GerenciamentoAtivos" element = {<GerenciametoAtivo />} />
            <Route path = "/AnaliseGrafica" element = {<AnaliseGrafica />} />
        </Routes>
    )
}

export default AppRouter;
