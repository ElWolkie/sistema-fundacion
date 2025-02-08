import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Usuarios: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Usuarios
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rol</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Juan Pérez</TableCell>
              <TableCell>juan@example.com</TableCell>
              <TableCell>Administrador</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>María Gómez</TableCell>
              <TableCell>maria@example.com</TableCell>
              <TableCell>Contador</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Usuarios;
