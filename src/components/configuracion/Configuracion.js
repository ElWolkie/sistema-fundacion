import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, TextField, Button } from "@mui/material";
const Configuracion = () => {
    return (_jsxs("div", { children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Configuraci\u00F3n" }), _jsxs("form", { noValidate: true, autoComplete: "off", children: [_jsx(TextField, { label: "Nombre de la Fundaci\u00F3n", variant: "outlined", fullWidth: true, margin: "normal" }), _jsx(TextField, { label: "Moneda", variant: "outlined", fullWidth: true, margin: "normal" }), _jsx(Button, { variant: "contained", color: "primary", children: "Guardar Cambios" })] })] }));
};
export default Configuracion;
