import { Button, TextField } from "@material-ui/core";
import React from "react";

function FormularioCadastro() {
  return (
    <form>
      <TextField id="name" label="Nome" variant="outlined" fullWidth margin="normal"/>
      <TextField id="middleName" label="Sobrenome" variant="outlined" fullWidth margin="normal"/>
      <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"/>
      <label>Promoções</label>
      <TextField type="checkbox" />
      <label>Novidades</label>
      <TextField type="checkbox" />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
