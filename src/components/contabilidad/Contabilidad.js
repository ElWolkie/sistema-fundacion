import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography, Box, Stack } from "@mui/material";
const Contabilidad = () => {
    return (_jsxs(Box, { p: 3, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Contabilidad" }), _jsxs(Stack, { direction: "row", spacing: 3, justifyContent: "space-between", children: [_jsx(Card, { style: { backgroundColor: "#4caf50", color: "#fff", flex: 1 }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", children: "Balance General" }), _jsx(Typography, { variant: "h4", children: "$5,000" })] }) }), _jsx(Card, { style: { backgroundColor: "#f44336", color: "#fff", flex: 1 }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", children: "Ingresos Mensuales" }), _jsx(Typography, { variant: "h4", children: "$10,000" })] }) }), _jsx(Card, { style: { backgroundColor: "#2196f3", color: "#fff", flex: 1 }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", children: "Egresos Mensuales" }), _jsx(Typography, { variant: "h4", children: "$5,000" })] }) })] })] }));
};
export default Contabilidad;
