import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, } from "@mui/material";
const Usuarios = () => {
    return (_jsxs("div", { children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Usuarios" }), _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Nombre" }), _jsx(TableCell, { children: "Email" }), _jsx(TableCell, { children: "Rol" })] }) }), _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { children: "Juan P\u00E9rez" }), _jsx(TableCell, { children: "juan@example.com" }), _jsx(TableCell, { children: "Administrador" })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Mar\u00EDa G\u00F3mez" }), _jsx(TableCell, { children: "maria@example.com" }), _jsx(TableCell, { children: "Contador" })] })] })] }) })] }));
};
export default Usuarios;
