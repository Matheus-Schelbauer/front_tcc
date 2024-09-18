import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../view/modules/components/AppBar";
import Toolbar from "../view/modules/components/Toolbar";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function createNavigationButton(name, onClick, sizeOfFont) {
  sizeOfFont = sizeOfFont !== undefined ? sizeOfFont : 18;

  return(
      <Button
      component="section"
      sx={{
        p: 2,
        border: "1px solid black",
        borderRadius: "0px",
        backgroundColor: "#f7c94a",
        height: 60,
        width: 140,
        textAlign: "center",
        margin: 1,
        color: "primary.dark",
        fontSize: sizeOfFont,
      }}
      onClick={onClick
      }
    >
      {name}
    </Button>
  ) 
}

function AppHeader() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="fixed" sx={{ height: "80px" }}>
        <Toolbar
          sx={{ justifyContent: "space-around", minHeight: "83px !important" }}
        >
          <Box sx={{ flex: 1 }} />
          <Button sx={{ flex: 1, margin: "1 px"}} >
            <img
              src="ProxInvestLogo-removebg-preview.png"
              alt="Logo da ProxInvest"
              style={{ height: "60px", width: "auto" }}
              onClick={()=>{
                navigate ("/")}}
            />
          </Button>

          {
          createNavigationButton("Home", ()=>{
            navigate ("/")
          })}

          {createNavigationButton("Carteiras", ()=>{
            navigate ("/Carteiras")
          })}

          {createNavigationButton("Gerenciamento de Ativos", ()=>{
            navigate ("/GerenciamentoAtivos")
          }, 13)}

          {createNavigationButton("Análise gráfica", ()=>{
            navigate ("/AnaliseGrafica")
          }, 13)
          }

          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={{ ...rightLink, color: "primary.dark" }}
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: "primary.dark" }}
            >
              {"Sign Up"}
            </Link>
          </Box>
          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppHeader;
