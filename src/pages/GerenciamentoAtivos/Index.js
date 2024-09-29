import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
import Typography from "../../view/modules/components/Typography";
import top100Films from "../../components/top100films";

// mudar o import do autocomplete do Create Ativo
// mudar o tipo de variável no DB da coluna ticketCode de char para "string"

function createData(nomeAtivo, valorUnitario, quantidade) {
  var valorTotal = valorUnitario * quantidade;
  return { nomeAtivo, valorUnitario, quantidade, valorTotal };
}

const rows = [
  createData("Bitcoin", 359096, 0.0001),
  createData("Cardano", 2.176, 22),
];

const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Ativos() {
  //consts for the delete Modal
  const [openDelete, setDeleteOpen] = React.useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);
  //consts for the create Modal
  const [openCreate, setCreateOpen] = React.useState(false);
  const handleCreateOpen = () => setCreateOpen(true);
  const handleCreateClose = () => setCreateOpen(false);

  return (
    <Container>
      <Box>
        <h1>Ativos presentes na ~CarteiraAtual.</h1>
      </Box>
      <br></br>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              <TableCell sx={{ fontSize: 20 }}>ATIVO</TableCell>
              <TableCell align="right" sx={{ fontSize: 20 }}>
                VALOR UNITÁRIO
              </TableCell>
              <TableCell align="right" sx={{ fontSize: 20 }}>
                QUANTIDADE
              </TableCell>
              <TableCell align="right" sx={{ fontSize: 20 }}>
                VALOR TOTAL
              </TableCell>
              <TableCell align="right" sx={{ fontSize: 20 }}>
                MANEJO
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ativo}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nomeAtivo}
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(row.valorUnitario)}
                </TableCell>
                <TableCell align="right">{row.quantidade}</TableCell>
                <TableCell align="right">
                  {formatCurrency(row.valorTotal)}
                </TableCell>
                <TableCell align="right" sx={{ padding: 0 }}>
                  <Button>
                    <img
                      src="edit_icon.png"
                      alt="Imagem de manejo"
                      style={{ height: "25px", width: "auto" }}
                      // onClick={

                      // } // navegar para manejo
                    />
                  </Button>
                  <Button>
                    <img
                      src="delete_icon.png"
                      alt="Imagem de deletar"
                      style={{ height: "25px", width: "auto" }}
                      onClick={handleDeleteOpen} // navegar para modal deletar
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        id="deleteModal"
        open={openDelete}
        onClose={handleDeleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-delete-title"
            variant="h6"
            component="h2"
            align="center"
          >
            Aviso!
          </Typography>
          <Typography id="modal-delete-description" sx={{ mt: 2 }}>
            Você está prestes a deletar um ativo! Essa ação é permanente. Tem
            certeza que deseja prosseguir?
          </Typography>
          <Box align="center" sx={{ margin: "1px !important" }}>
            <Button align="left" sx={{ color: "black", width: "50%" }}>
              {"Sim"}
            </Button>
            <Button
              align="right"
              sx={{ color: "black", width: "50%" }}
              onClick={handleDeleteClose}
            >
              {"Não"}
            </Button>
          </Box>
        </Box>
      </Modal>

      <Box
        sx={{
          marginTop: "2vh",
          textAlign: "left",
        }}
      >
        <Button sx={{}} onClick={handleCreateOpen}>
          <img
            src="add_icon.png"
            style={{ height: "30px", width: "auto", margin: "5px" }}
          ></img>
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Inserir ativo
          </Typography>
        </Button>
      </Box>
      <Modal
        id="createModal"
        open={openCreate}
        onClose={handleCreateClose}
        aria-labelledby="modal-create-ativo"
        aria-describedby="modal-create-description"
      >
        <Box sx={style}>
          <Typography id="modal-create-ativo" variant="h6" component="h2">
            INSERIR ATIVO
          </Typography>
          <Typography id="modal-create-description" sx={{ mt: 2 }}>
            Digite o nome do ativo a ser inserido.
          </Typography>
          <Autocomplete //mudar para o objeto com os Ativos
            disablePortal
            options={top100Films} // este objeto tem que mudar
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Ativo" />}
          />
          <Typography id="modal-create-description" sx={{ mt: 2 }}>
            Quantidade.
          </Typography>

          <TextField
  id="ativo-Quantidade"
  label="Quantidade"
  variant="outlined"
  sx={{ width: "100%" }}
  slotProps={{
    input: {
      inputMode: "decimal", // Ensures numeric keyboard with decimal support on mobile
      pattern: "[0-9]*[.,]?[0-9]*", // Ensures only numbers and decimals are allowed
      onInput: (e) => {
        // Validate input to ensure only numbers and one decimal point are allowed
        const value = e.target.value.replace(",", "."); // Replaces commas with dots
        if (!/^\d*\.?\d*$/.test(value)) {
          e.target.value = value.slice(0, -1); // Prevents invalid input
        }
      }
    }
  }}
/>

          <Button align="left" sx={{ color: "black", width: "50%" }}>
            {"Salvar"}
          </Button>
          <Button
            align="right"
            sx={{ color: "black", width: "50%" }}
            onClick={handleCreateClose}
          >
            {"Cancelar"}
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default Ativos;
