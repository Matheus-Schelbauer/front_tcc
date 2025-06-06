import { Box, Button, Container, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import * as React from "react";
import Typography from "../../view/modules/components/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api, { createUser } from "../../services/services";

// TODO - fazer modal de sucesso de criação de usuário

function SignUp() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState(""); 
  const [passwordError, setPasswordError] = React.useState(false); 
  const [open, setOpen] = React.useState(false);  // Modal state - refactor to openModal and setOpenModal
  const navigate = useNavigate();  // Initialize navigate hook

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    if (!emailError && !passwordError) {
      //console.log(username, email, password);

      const userDto = {
        name: username,
        email: email,
        password: password,
      };

      try {
        // Fazendo uma requisição POST ao backend (Spring Boot API)
        const response = await createUser (userDto);

        //getUsers
        if (response.status === 200) {
          // Usuário criado com sucesso === 200, abre o modal de usuário criado com sucesso
          setOpen(true);
          console.log("Usuário criado:", response.data);
        } else {
          console.log("Erro ao criar usuário:", response.status);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    }
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
    navigate("/SignIn");  // Redirect to SignIn page
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(
      passwordConfirmation && e.target.value !== passwordConfirmation
    );
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
    setPasswordError(password && e.target.value !== password);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center", // Center the container horizontally
        flexDirection: "column",
      }}
    >
        <h1>Por favor complete o formulário abaixo:</h1>
      {/* {"Box da form"} */}
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers content horizontally
          "& > :not(style)": { m: 2, width: "25ch" },
          width: "100%",
        }}
        autoComplete="off"
        alignSelf={"center"}
      >
        <h3>{"Nome de Usuário"}</h3>

        <TextField
          required
          id={"Username"}
          label={"Nome de Usuário"}
          variant="filled"
          sx={{ width: "80% !important" }}
          inputProps={{ maxLength: 75 }} // Set the character limit
          type={"text"} // Set the input type
          onChange={(e) => setUsername(e.target.value)}
        />
        <h3>{"Email"}</h3>
        <TextField
          required
          id={"Email"}
          label={"email@exemplo.com"}
          variant="filled"
          sx={{ width: "80% !important" }}
          inputProps={{ maxLength: 75 }} // Set the character limit
          type={"email"} // Set the input type
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Por favor digite um email válido" : ""}
        />
        <h3>{"Senha"}</h3>
        <TextField
          required
          id={"password"}
          label={"Senha"}
          variant="filled"
          sx={{ width: "80% !important" }}
          inputProps={{ maxLength: 75 }} // Set the character limit
          type={"password"} // Set the input type
          onChange={handlePasswordChange}
          error={passwordError}
        />
        <h3>{"Confirmação de senha"}</h3>
        <TextField
          required
          id={"passwordConfirmation"}
          label={"Confirmação de senha"}
          variant="filled"
          sx={{ width: "80% !important" }}
          inputProps={{ maxLength: 75 }} // Set the character limit
          type={"password"} // Set the input type (e.g., "text", "email", "password")
          onChange={handlePasswordConfirmationChange}
          error={passwordError}
          helperText={passwordError ? "As senhas não coincidem" : ""}
        />

        <Button
          component="section"
          type="submit"
          sx={{
            p: 2,
            border: "1px solid black",
            borderRadius: "0px",
            backgroundColor: "#f7c94a",
            height: 45,
            width: 250,
            textAlign: "center",
            margin: 1,
            color: "primary.dark",
            fontSize: "15px",
            display: "flex",
          }}
          onClick={handleSubmit}
        >
          <img
            src="add_icon.png"
            style={{ height: "25px", width: "auto", margin: "5px" }}
          ></img>
          {"Criar conta"}
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>

      {/* Modal for successful user creation */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Usuário Criado!</DialogTitle>
        <DialogContent>
          <Typography>Seu usuário foi criado com sucesso.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="black">Fechar</Button>
        </DialogActions>
      </Dialog>

    </Container>
  );
}

export default SignUp;
