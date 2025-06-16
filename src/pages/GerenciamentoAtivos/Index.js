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
import tickers from "../../components/allTickersBr";
import api from "../../services/services";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

// 👇 MOCK de userId temporário e wallet
const MOCK_USER_ID = {
  id: 1,
  name: "Dreivid",
  email: "ootaldo@david.com.br",
  password: "isso",
};
const MOCK_WALLET_ID = {
  id: 1,
  name: "Mercado BTC\t",
  description: "BTC, ADA",
  walletValue: 20000.0,
};

// function createData(nomeAtivo, valorUnitario, quantidade) {
//   var valorTotal = valorUnitario * quantidade;
//   return { nomeAtivo, valorUnitario, quantidade, valorTotal };
// }

// const rows = [
//   createData("Bitcoin", 359096, 0.0001),
//   createData("Cardano", 2.176, 22),
// ];

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
  const { walletId } = useParams();
  const location = useLocation();
  const walletName = location.state?.walletName || "Carteira"; // fallback se não vier nada

  //consts for the delete Modal
  const [openDelete, setDeleteOpen] = React.useState(false);
  const handleDeleteOpen = (ativo) => {
    setAtivoDeletando(ativo);
    setDeleteOpen(true);
  };
  const handleDeleteClose = () => setDeleteOpen(false);
  //consts for the create Modal
  const [openCreate, setCreateOpen] = React.useState(false);
  const handleCreateOpen = () => setCreateOpen(true);
  const handleCreateClose = () => setCreateOpen(false);

  // 👇 Estado para armazenar as carteiras vindas do back
  const [assets, setAssets] = React.useState([]);

  // 👇 useEffect que chama a API ao carregar a tela - GET
  React.useEffect(() => {
    console.log("ID da carteira recebida:", walletId);

    const fetchAssets = async () => {
      try {
        const response = await api.getAssetsByWallet(
          MOCK_USER_ID.id,
          parseInt(walletId)
        );

        const ativosComTotal = response.data.map((item) => ({
          ...item,
          valorTotal: item.valorUnitario * item.quantidade,
        }));

        setAssets(ativosComTotal);
      } catch (error) {
        console.error("Erro ao buscar ativos:", error);
      }
    };

    fetchAssets();
  }, []);

  // 👇 Estados para criação de ativo
  const [novoAtivo, setNovoAtivo] = React.useState("");
  const [quantidade, setQuantidade] = React.useState("");

  const handleCreateAsset = async () => {
    try {
      const asset = {
        ticketCode: novoAtivo,
        quantity: parseFloat(quantidade),
        unitaryValue: 0, // 👈 por enquanto defaulta como 0
        totalValue: 0, // 👈 será recalculado no backend ou depois do fetch
        walletId: parseInt(walletId),
        assetOriginalId: 0,
      };

      await api.createAsset(MOCK_USER_ID.id, parseInt(walletId), asset);
      handleCreateClose(); // Fecha o modal
      setNovoAtivo(""); // Limpa os inputs
      setQuantidade("");

      // 👇 Atualiza os dados da tabela
      const response = await api.getAssetsByWallet(
        MOCK_USER_ID.id,
        parseInt(walletId)
      );
      setAssets(response.data);
    } catch (error) {
      console.error("Erro ao salvar ativo:", error);
    }
  };

  // Estado para o modal de edição
  const [openEdit, setEditOpen] = React.useState(false);
  const [ativoEditando, setAtivoEditando] = React.useState(null); // guarda o ativo que está sendo editado
  const handleEditOpen = (ativo) => {
    setAtivoEditando(ativo);
    setEditOpen(true);
  };
  const handleEditClose = () => {
    setAtivoEditando(null);
    setEditOpen(false);
  };

  // Estado para o modal de deletar
  const [ativoDeletando, setAtivoDeletando] = React.useState(null);

  const handleDeleteAsset = async () => {
    try {
      await api.deleteAsset(ativoDeletando.id);

      // Atualiza a tabela após deletar
      const response = await api.getAssetsByWallet(
        MOCK_USER_ID.id,
        parseInt(walletId)
      );
      setAssets(response.data);

      handleDeleteClose();
      setAtivoDeletando(null);
    } catch (error) {
      console.error("Erro ao deletar ativo:", error);
    }
  };

  return (
    <Container>
      <Box>
        {/* //checkar depois */}
        <h1>Ativos presentes na carteira {walletName}.</h1>
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
            {assets.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ticketCode} - {row.assetOriginal?.name || ""}
                </TableCell>
                <TableCell align="right">
                  {formatCurrency(row.unitaryValue)}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">
                  {formatCurrency(row.totalValue)}
                </TableCell>
                <TableCell align="right" sx={{ padding: 0 }}>
                  <Button onClick={() => handleEditOpen(row)}>
                    <img
                      src="/edit_icon.png"
                      alt="Imagem de manejo"
                      style={{ height: "25px", width: "auto" }}
                    />
                  </Button>
                  <Button onClick={() => handleDeleteOpen(row)}>
                    <img
                      src="/delete_icon.png"
                      alt="Imagem de deletar"
                      style={{ height: "25px", width: "auto" }}
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
            <Button
              align="left"
              sx={{ color: "black", width: "50%" }}
              onClick={handleDeleteAsset}
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
          <Autocomplete
            disablePortal
            options={tickers} // mudar objeto depois
            sx={{ width: "100%" }}
            getOptionLabel={(option) =>
              option.Ticker + " - " + option.Nome || ""
            }
            onChange={(event, value) => setNovoAtivo(value?.Ticker || "")}
            renderInput={(params) => <TextField {...params} Ticker="Ativo" />}
          />

          <Typography id="modal-create-description" sx={{ mt: 2 }}>
            Quantidade.
          </Typography>

          <TextField
            id="ativo-Quantidade"
            label="Quantidade"
            variant="outlined"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            sx={{ width: "100%" }}
            slotProps={{
              input: {
                inputMode: "decimal",
                pattern: "[0-9]*[.,]?[0-9]*",
                onInput: (e) => {
                  const value = e.target.value.replace(",", ".");
                  if (!/^\d*\.?\d*$/.test(value)) {
                    e.target.value = value.slice(0, -1);
                  }
                },
              },
            }}
          />

          <Button
            align="left"
            sx={{ color: "black", width: "50%" }}
            onClick={handleCreateAsset}
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
        id="editModal"
        open={openEdit}
        onClose={handleEditClose}
        aria-labelledby="modal-edit-ativo"
        aria-describedby="modal-edit-description"
      >
        <Box sx={style}>
          <Typography id="modal-edit-ativo" variant="h6" component="h2">
            EDITAR ATIVO
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Atualize a quantidade do ativo {ativoEditando?.ticketCode}
          </Typography>

          <TextField
            label="Quantidade"
            variant="outlined"
            value={ativoEditando?.quantity || ""}
            onChange={(e) =>
              setAtivoEditando((prev) => ({
                ...prev,
                quantity: e.target.value,
              }))
            }
            sx={{ width: "100%", mt: 2 }}
            slotProps={{
              input: {
                inputMode: "decimal",
                pattern: "[0-9]*[.,]?[0-9]*",
                onInput: (e) => {
                  const value = e.target.value.replace(",", ".");
                  if (!/^\d*\.?\d*$/.test(value)) {
                    e.target.value = value.slice(0, -1);
                  }
                },
              },
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              sx={{ color: "black", width: "48%" }}
              onClick={async () => {
                try {
                  const assetAtualizado = {
                    ...ativoEditando,
                    quantity: parseFloat(ativoEditando.quantity),
                  };

                  await api.updateAsset(
                    MOCK_USER_ID.id,
                    parseInt(walletId),
                    assetAtualizado.id,
                    assetAtualizado
                  );

                  handleEditClose();

                  // Atualiza a tabela após salvar
                  const response = await api.getAssetsByWallet(
                    MOCK_USER_ID.id,
                    parseInt(walletId)
                  );
                  setAssets(response.data);
                } catch (error) {
                  console.error("Erro ao atualizar ativo:", error);
                }
              }}
            >
              Salvar
            </Button>
            <Button
              sx={{ color: "black", width: "48%" }}
              onClick={handleEditClose}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}

export default Ativos;
