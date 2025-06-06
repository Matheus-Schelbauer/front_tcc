import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/Index";
import Carteiras from "../pages/Carteiras/Index";
import GerenciametoAtivo from "../pages/GerenciamentoAtivos/Index";
import AnaliseGrafica from "../pages/AnaliseGrafica/Index";
import SignUp from "../pages/SignUp/Index";
import SignIn from "../pages/SignIn/Index";
import { useAuth } from "../contexts/AuthContext";


function AppRouter() {
    
    const { isAuthenticated, loading } = useAuth();

    function ProtectedRoute({ children }) {
      
        if (loading) return <div>Loading...</div>;

        console.log(isAuthenticated);
      
        return isAuthenticated ? children : <Navigate to="/SignIn" replace />;
    }


    return ( 
        <Routes>
            <Route path = "/" element ={<HomePage />} />
            <Route path = "/Carteiras" element = {<ProtectedRoute> <Carteiras /> </ProtectedRoute>} />
            <Route path = "/GerenciamentoAtivos" element = {<ProtectedRoute><GerenciametoAtivo /></ProtectedRoute> } />
            <Route path = "/AnaliseGrafica" element = {<ProtectedRoute> <AnaliseGrafica /> </ProtectedRoute>} />
            <Route path = "/SignUp" element = {<SignUp/>} />
            <Route path = "/SignIn" element = {<SignIn/>} />
        </Routes>
    )
}

export default AppRouter;
