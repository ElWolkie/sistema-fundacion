import React from "react";
import {
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const Ingresos: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Ingresos
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
          Registrar Ingreso
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
              <TableCell>Donación</TableCell>
              <TableCell>$1,000</TableCell>
              <TableCell>2023-10-01</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Venta de productos</TableCell>
              <TableCell>$500</TableCell>
              <TableCell>2023-10-02</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Ingresos;
