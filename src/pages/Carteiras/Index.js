import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
import Typography from "../../view/modules/components/Typography";
import api from "../../services/services";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// function createData(carteira, saldo, principaisAtivos) {
//   return { carteira, saldo, principaisAtivos };
// }
// const rows = [
//   createData("Mercado BTC", 20000, "BTC, ADA"),
//   createData("Binance", 5302, "BTC, ETH"),
//   createData("XP Investimentos", 262, "PETR4, WEG3"),
// ];

// 👇 Função pra formatar valor em BRL
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

// // 👇 MOCK de userId temporário
// const MOCK_USER_ID = {
//   id: 1,
//   name: "Dreivid",
//   email: "ootaldo@david.com.br",
//   password: "isso",
// };

function Carteiras() {
  const { user } = useAuth(); // usa o id do usuário logado

  //consts for the delete Modal
  const [openDelete, setDeleteOpen] = React.useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  //consts for the create Modal
  const [openCreate, setCreateOpen] = React.useState(false);
  const handleCreateOpen = () => setCreateOpen(true);
  const handleCreateClose = () => setCreateOpen(false);

  // Estado que armazena o nome digitado para a nova carteira no modal de criação
  const [newWalletName, setNewWalletName] = React.useState("");

  // Estado que armazena o nome digitado para a nova carteira no modal de criação
  const [walletToDelete, setWalletToDelete] = React.useState(null);

  // Estado para armazenar a carteira que será editada
  const [walletToEdit, setWalletToEdit] = React.useState(null);

  // Estado para controlar se o modal de edição está aberto
  const [openEdit, setEditOpen] = React.useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  // Estado para o novo nome digitado no modal de edição
  const [editedWalletName, setEditedWalletName] = React.useState("");

  // 👇 Estado para armazenar as carteiras vindas do back
  const [carteiras, setCarteiras] = React.useState([]);

  const navigate = useNavigate();

  const handleCreateWallet = async () => {
    try {
      console.log(user.id);
      await api.createWallet(user.id, {
        name: newWalletName,
      });

      // Atualiza a lista de carteiras depois de criar
      const response = await api.getWalletsByUser(user.id);
      setCarteiras(response.data);

      // Limpa o campo e fecha o modal
      setNewWalletName("");
      handleCreateClose();
    } catch (error) {
      console.error("Erro ao criar carteira:", error);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      if (!walletToDelete) return;

      await api.deleteWallet(user.id, walletToDelete.id);

      // Atualiza a lista de carteiras
      const response = await api.getWalletsByUser(user.id);
      setCarteiras(response.data);

      // Fecha modal e limpa a carteira selecionada
      handleDeleteClose();
      setWalletToDelete(null);
    } catch (error) {
      console.error("Erro ao deletar carteira:", error);
    }
  };

  const handleUpdateWallet = async () => {
    try {
      if (!walletToEdit) return;

      await api.updateWallet(user.id, walletToEdit.id, {
        name: editedWalletName,
        walletValue: walletToEdit.walletValue,
      });

      // Atualiza a lista
      const response = await api.getWalletsByUser(user.id);
      setCarteiras(response.data);

      // Limpa os estados e fecha o modal
      setWalletToEdit(null);
      setEditedWalletName("");
      handleEditClose();
    } catch (error) {
      console.error("Erro ao editar carteira:", error);
    }
  };

  // 👇 useEffect que chama a API ao carregar a tela
  React.useEffect(() => {
    const fetchCarteiras = async () => {
      try {
        const response = await api.getWalletsByUser(user.id);
        setCarteiras(response.data);
      } catch (error) {
        console.error("Erro ao buscar carteiras:", error);
      }
    };

    fetchCarteiras();
  }, []);

  return (
    <Container>
      <Box>
        <h1>Bem vindo, {user?.name}!</h1>
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
                MANEJO
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 👇 Aqui agora usamos o array do back */}
            {carteiras.map((row) => (
              <TableRow
                key={row.id} // 👇 usei id que normalmente vem da API
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(row.walletValue || 0)}
                </TableCell>
                <TableCell align="right" sx={{ padding: 0 }}>
                  <Button>
                    <img
                      src="/edit_icon.png"
                      alt="Imagem de manejo"
                      style={{ height: "25px", width: "auto" }}
                      onClick={() => {
                        setWalletToEdit(row);
                        setEditedWalletName(row.name); // pré-preenche o campo com o nome atual
                        handleEditOpen();
                      }}
                      // abrir modal de edição
                    />
                  </Button>
                  <Button>
                    <img
                      src="/delete_icon.png"
                      alt="Imagem de deletar"
                      style={{ height: "25px", width: "auto" }}
                      onClick={() => {
                        setWalletToDelete(row);
                        handleDeleteOpen();
                      }}
                      // navegar para modal deletar
                    />
                  </Button>
                  <Tooltip
                    title="Gerenciar ativos da carteira"
                    placement="right"
                  >
                    <Button
                      onClick={() =>
                        navigate(`/GerenciamentoAtivos/${row.id}`, {
                          state: { walletName: row.name },
                        })
                      }
                    >
                      <img
                        src="/forwardToAssets.png"
                        alt="Imagem de redirecionar à ativos"
                        style={{ height: "30px", width: "auto" }}
                      />
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
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
            Você está prestes a deletar uma carteira! Essa ação é permanente.
            Tem certeza que deseja prosseguir?
          </Typography>
          <Box align="center" sx={{ margin: "1px !important" }}>
            <Button
              align="left"
              sx={{ color: "black", width: "50%" }}
              onClick={handleConfirmDelete}
            >
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
            src="/add_icon.png"
            style={{ height: "30px", width: "auto", margin: "5px" }}
          ></img>
          <Typography
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Inserir carteira
          </Typography>
        </Button>
      </Box>
      <Modal
        open={openCreate}
        onClose={handleCreateClose}
        aria-labelledby="modal-create-carteira"
        aria-describedby="modal-create-description"
      >
        <Box sx={style}>
          <Typography id="modal-create-carteira" variant="h6" component="h2">
            INSERIR CARTEIRA
          </Typography>
          <Typography id="modal-create-description" sx={{ mt: 2 }}>
            Digite o nome da sua carteira. Para adicionar ativos à ela, clique
            no ícone amarelo na coluna de manejo.
          </Typography>
          <TextField
            id="new-Carteira"
            label="Nome da Carteira"
            variant="outlined"
            sx={{ width: "100%" }}
            value={newWalletName}
            onChange={(e) => setNewWalletName(e.target.value)}
          />
          <Button
            align="left"
            sx={{ color: "black", width: "50%" }}
            onClick={handleCreateWallet}
          >
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

      <Modal
        open={openEdit}
        onClose={handleEditClose}
        aria-labelledby="modal-edit-carteira"
        aria-describedby="modal-edit-description"
      >
        <Box sx={style}>
          <Typography id="modal-edit-carteira" variant="h6" component="h2">
            EDITAR CARTEIRA
          </Typography>
          <Typography id="modal-edit-description" sx={{ mt: 2 }}>
            Edite o nome da carteira abaixo:
          </Typography>
          <TextField
            id="edit-Carteira"
            label="Nome da Carteira"
            variant="outlined"
            sx={{ width: "100%" }}
            value={editedWalletName}
            onChange={(e) => setEditedWalletName(e.target.value)}
          />
          <Button
            sx={{ color: "black", width: "50%" }}
            onClick={handleUpdateWallet}
          >
            Salvar
          </Button>
          <Button
            sx={{ color: "black", width: "50%" }}
            onClick={handleEditClose}
          >
            Cancelar
          </Button>
        </Box>
      </Modal>
    </Container>
  );
}

export default Carteiras;
