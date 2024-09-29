import { Box, Button, Container, TextField } from "@mui/material";
import * as React from "react";
import Typography from "../../view/modules/components/Typography";

function SignUp() {
  function createTextField(textID, textName, labelName, type, functionValidator, errorFunction) {
    return (
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers content horizontally
          "& > :not(style)": { m: 2, width: "25ch" },
          width: "100%",
        }}
        noValidate
        autoComplete="off"
        alignSelf={"center"}
      >
        <h2>{textName}</h2>

        <TextField
          required
          id={textID}
          label={labelName}
          variant="filled"
          sx={{ width: "80% !important" }}
          inputProps={{ maxLength: 75 }} // Set the character limit
          type={type} // Set the input type (e.g., "text", "email", "password")
          onChange={functionValidator}
          error={errorFunction}
          helperText={emailError ? "Please enter a valid email" : ""}
  
        />
        <br></br>
      </Box>
    );
  }

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);


  const handleEmailChange = e => {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };


  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center", // Center the container horizontally
        flexDirection: "column",
      }}
    >
      <Typography>
        <h1>Por favor complete o formulário abaixo:</h1>
      </Typography>
      {/*Box do nome*/}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers content horizontally
          "& > :not(style)": { m: 2, width: "25ch" },
          width: "100%",
        }}
        noValidate
        autoComplete="off"
        alignSelf={"center"}
      >
        <h2>{"Nome de Usuário"}</h2>

        <TextField
          required
          id={"Username"}
          label={"Nome de Usuário"}
          variant="filled"
          sx={{ width: "80% !important" }}
          inputProps={{ maxLength: 75 }} // Set the character limit
          type={"text"} // Set the input type (e.g., "text", "email", "password")
        />
        <br></br>
      </Box>

      {/*Box do Email*/}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers content horizontally
          "& > :not(style)": { m: 2, width: "25ch" },
          width: "100%",
        }}
        noValidate
        autoComplete="off"
        alignSelf={"center"}
      >
        <h2>{"Email"}</h2>

        <TextField
          required
          id={"Email"}
          label={"email@exemplo.com"}
          variant="filled"
          sx={{ width: "80% !important" }}
          inputProps={{ maxLength: 75 }} // Set the character limit
          type={"email"} // Set the input type (e.g., "text", "email", "password")
          onChange={handleEmailChange}
          error={emailError}
          helperText={emailError ? "Por favor digite um email válido" : ""}
  
        />
        <br></br>
      </Box>

      {/*Box da senha*/}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // Centers content horizontally
          "& > :not(style)": { m: 2, width: "25ch" },
          width: "100%",
        }}
        noValidate
        autoComplete="off"
        alignSelf={"center"}
      >
        <h2>{"Senha"}</h2>

        <TextField
          required
          id={"Senha"}
          label={"Senha"}
          variant="filled"
          sx={{ width: "80% !important" }}
          inputProps={{ maxLength: 75 }} // Set the character limit
          type={"password"} // Set the input type (e.g., "text", "email", "password")
  
        />
        <br></br>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          component="section"
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
          //   onClick={onClick
          //   }
        >
          <img
            src="add_icon.png"
            style={{ height: "25px", width: "auto", margin: "5px" }}
          ></img>
          {"Criar conta"}
        </Button>
      </Box>
    </Container>
  );
}

export default SignUp;
