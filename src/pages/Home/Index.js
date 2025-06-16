import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LoginIcon from "@mui/icons-material/Login";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 6 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>
        <Box textAlign="center">
          <AccountBalanceIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />

          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Bem-vindo ao ProxInvest!
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body1" paragraph>
            O <strong>ProxInvest</strong> é um sistema feito para facilitar o controle de carteiras de investimentos pessoais.
            Crie carteiras, adicione ativos atualizados automaticamente via API, edite e acompanhe seus investimentos em tempo real.
          </Typography>

          <TrendingUpIcon color="success" sx={{ fontSize: 40, my: 2 }} />

          <Typography variant="body1" paragraph>
            Tudo isso com uma interface simples, responsiva e com foco total na usabilidade. Perfeito para investidores que buscam controle e praticidade.
          </Typography>

          <Typography variant="body1" paragraph>
            Faça <strong>LOGIN</strong> ou <strong>SIGN UP</strong> para acessar suas <strong>CARTEIRAS</strong> e comece a gerenciar seus ativos agora mesmo!
          </Typography>

          {/* <Button
            variant="contained"
            color="primary"
            startIcon={<LoginIcon />}
            onClick={() => navigate("/SignIn")}
            sx={{ mt: 3 }}
          >
            Acessar minha conta
          </Button> */}
        </Box>
      </Paper>
    </Container>
  );
}

export default HomePage;
