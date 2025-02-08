import React from "react";
import { Typography, TextField, Button } from "@mui/material";

const Configuracion: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Configuración
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Nombre de la Fundación"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Moneda"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary">
          Guardar Cambios
        </Button>
      </form>
    </div>
  );
};

export default Configuracion;
