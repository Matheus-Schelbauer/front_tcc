import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../view/modules/components/Typography";
import TextField from "../view/modules/components/TextField";
import { Button } from "@mui/material";


export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "primary.light", marginTop: "auto", minHeight: "80px !important" }}
    >
      <Container sx={{ display: "flex", justifyContent: "center", alignItems: 'center', }}>
        <Box sx={{
          color: "secondary.light",
          }}>
          
        {"Trabalho de Conclusão de Curso de Especialização em Desenvolvimento Ágil de Software - Matheus da Rocha Schelbauer"}          
        </Box>
        <Box sx={{ }}>
          <Link href="https://github.com/Matheus-Schelbauer" target="_blank" rel="noopener noreferrer">
            <Button sx={{borderRadius: "50%", bgcolor: "lightgray", margin: "5px", }}>
              <img src="gitHub_icon.png" style={{ height: "40px", width: "40px", margin: "5px" }}>
              </img>
          </Button>
          </Link>
        </Box>
      </Container>
    </Typography>
  );
}
