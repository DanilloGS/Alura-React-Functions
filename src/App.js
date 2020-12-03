import { Container } from "@material-ui/core";
import React from "react";
import FormularioCadastro from "./Components/FormularioCadastro";

function App() {
  return (
    <Container maxWidth="sm">
      <h1>Formulário de cadastro</h1>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
