import { Box, Button, Container, TextField } from "@mui/material";
import * as React from "react";
import Typography from "../../view/modules/components/Typography";

function SignIn() {
  function createTextField(textID, textName, labelName, type) {
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
          id={textID}
          label={labelName}
          variant="filled"
          sx={{ width: "80% !important" }}
          inputProps={{ maxLength: 75 }} // Set the character limit
          type={type} // Set the input type (e.g., "text", "email", "password")
        />
        <br></br>
      </Box>
    );
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center", // Center the container horizontally
        flexDirection: "column",
      }}
    >
      <Typography>
        <h1>Por favor insira suas informações de usuário</h1>
      </Typography>
      {createTextField("Email", "Email", "Email", "email")}
      {createTextField("Senha", "Senha", "Senha", "password")}

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
            fontSize: "20px",
            display: "flex",
          }}
          //   onClick={onClick
          //   }
        >
          
          {"Acessar conta"}
        </Button>
      </Box>
    </Container>
  );
}

export default SignIn;
