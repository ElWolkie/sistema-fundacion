import React from "react";
import {
  TextField,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Egresos: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Egresos
      </Typography>
      <form noValidate autoComplete="off" style={{ marginBottom: 20 }}>
        <TextField
          label="Descripción"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Monto"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
        />
        <Button variant="contained" color="primary">
          Registrar Egreso
        </Button>
      </form>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#3f51b5" }}>
              <TableCell style={{ color: "#fff" }}>Descripción</TableCell>
              <TableCell style={{ color: "#fff" }}>Monto</TableCell>
              <TableCell style={{ color: "#fff" }}>Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Compra de materiales</TableCell>
              <TableCell>$300</TableCell>
              <TableCell>2023-10-01</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pago de servicios</TableCell>
              <TableCell>$200</TableCell>
              <TableCell>2023-10-02</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Egresos;
