import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from './view/Home';
import { Fragment } from "react";
// import AppAppBar from './components/AppHeader.js';
import AppRouter from "./routes/Index";
import withRoot from "../src/view/modules/withRoot.js";
import AppHeader from "./components/AppHeader.js";
import AppFooter from "./components/AppFooter.js";
import { Container } from "@mui/material";
//import useAuth from './hooks/useAuth';
import { AuthProvider } from "./contexts/AuthContext.js";


function App() {
  return (
    <AuthProvider>
        <div className="App">
          <AppHeader />
          <Container className="MainContent">
            <AppRouter />
          </Container>
          <AppFooter />
        </div>
    </AuthProvider>
  );
}

export default withRoot(App);
