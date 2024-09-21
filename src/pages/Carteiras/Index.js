import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, Modal } from "@mui/material";
import Typography from "../../view/modules/components/Typography";

function createData(carteira, saldo, principaisAtivos) {
  return { carteira, saldo, principaisAtivos };
}

const rows = [
  createData("Mercado BTC", 20000, "BTC, ADA"),
  createData("Binance", 5302, "BTC, ETH"),
  createData("XP Investimentos", 262, "PETR4, WEG3"),
];

const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Carteiras() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Box>
        <h1>
          Bem vindo, ~Username, seu saldo atual é de ~sumOfSaldoDaCarteira.
        </h1>
      </Box>
      <br></br>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              <TableCell sx={{ fontSize: 20 }}>CARTEIRA</TableCell>
              <TableCell align="right" sx={{ fontSize: 20 }}>
                SALDO
              </TableCell>
              <TableCell align="right" sx={{ fontSize: 20 }}>
                PRINCIPAIS ATIVOS
              </TableCell>
              <TableCell align="right" sx={{ fontSize: 20 }}>
                MANEJO
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.carteira}
                </TableCell>
                <TableCell align="right">{formatCurrency(row.saldo)}</TableCell>
                <TableCell align="right">{row.principaisAtivos}</TableCell>
                <TableCell align="right" sx={{ padding: 0 }}>
                  <Button>
                    <img
                      src="edit_icon.png"
                      alt="Imagem de manejo"
                      style={{ height: "20px", width: "auto" }}
                      // onClick={
                        
                      // } // navegar para manejo
                    />
                  </Button>
                  <Button>
                    <img
                      src="delete_icon.png"
                      alt="Imagem de deletar"
                      style={{ height: "20px", width: "auto" }}
                      onClick={handleOpen} // navegar para modal deletar
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-delete-title" variant="h6" component="h2" align= "center"> 
            Aviso!
          </Typography>
          <Typography id="modal-delete-description" sx={{ mt: 2 }}>
            Você está prestes a deletar uma carteira! Essa ação é permanente. Tem certeza que deseja prosseguir?
          </Typography>
          <Box align= "center" sx={{ margin: "1px !important"}}>
            <Button align = "left" sx={{color: "black"}}>{"Sim"}</Button>
            <Button align = "right" sx={{color: "black"}}>{"Não"}</Button>
          </Box>
        </Box>
      </Modal>

      <Box sx={{
        marginTop: "2vh",
        textAlign: "left",
      }}>
        <Button sx={{
        }}>
          <img src="add_icon.png" style={{ height: "30px", width: "auto", margin: "5px" }}>
          </img>
          <Typography sx={{
            color: "black",
            fontWeight: "bold"
          }}>
            Inserir carteira
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}

export default Carteiras;
