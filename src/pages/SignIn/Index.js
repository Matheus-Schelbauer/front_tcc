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
        <h1>Depois de terminar o signUp, copiar as infomações aqui retirando as não usadas</h1>
      </Typography>
     
    </Container>
  );
}

export default SignIn;
