import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, Typography, Box, Stack } from "@mui/material";
const Dashboard = () => {
    return (_jsxs(Box, { p: 3, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "Dashboard" }), _jsxs(Stack, { direction: "row", spacing: 3, justifyContent: "space-between", children: [_jsx(Card, { style: { backgroundColor: "#4caf50", color: "#fff", flex: 1 }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", children: "Ingresos Totales" }), _jsx(Typography, { variant: "h4", children: "$10,000" })] }) }), _jsx(Card, { style: { backgroundColor: "#f44336", color: "#fff", flex: 1 }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", children: "Egresos Totales" }), _jsx(Typography, { variant: "h4", children: "$5,000" })] }) }), _jsx(Card, { style: { backgroundColor: "#2196f3", color: "#fff", flex: 1 }, children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", children: "Saldo Actual" }), _jsx(Typography, { variant: "h4", children: "$5,000" })] }) })] })] }));
};
export default Dashboard;
