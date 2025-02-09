import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import Typography from "@mui/material/Typography";
const Sidebar = () => {
    return (_jsxs("div", { style: {
            width: 250,
            backgroundColor: "#3f51b5",
            color: "#fff",
            height: "100vh",
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
            padding: "20px 0",
        }, children: [_jsx(Typography, { variant: "h6", style: { padding: "0 16px", marginBottom: 20 }, children: "Sistema Administrativo" }), _jsxs(List, { children: [_jsxs(ListItem, { component: Link, to: "/", style: { color: "#fff" }, children: [_jsx(ListItemIcon, { style: { color: "#fff" }, children: _jsx(DashboardIcon, {}) }), _jsx(ListItemText, { primary: "Dashboard" })] }), _jsxs(ListItem, { component: Link, to: "/ingresos", style: { color: "#fff" }, children: [_jsx(ListItemIcon, { style: { color: "#fff" }, children: _jsx(AttachMoneyIcon, {}) }), _jsx(ListItemText, { primary: "Ingresos" })] }), _jsxs(ListItem, { component: Link, to: "/egresos", style: { color: "#fff" }, children: [_jsx(ListItemIcon, { style: { color: "#fff" }, children: _jsx(MoneyOffIcon, {}) }), _jsx(ListItemText, { primary: "Egresos" })] }), _jsxs(ListItem, { component: Link, to: "/contabilidad", style: { color: "#fff" }, children: [_jsx(ListItemIcon, { style: { color: "#fff" }, children: _jsx(AccountBalanceIcon, {}) }), _jsx(ListItemText, { primary: "Contabilidad" })] }), _jsxs(ListItem, { component: Link, to: "/usuarios", style: { color: "#fff" }, children: [_jsx(ListItemIcon, { style: { color: "#fff" }, children: _jsx(PeopleIcon, {}) }), _jsx(ListItemText, { primary: "Usuarios" })] }), _jsxs(ListItem, { component: Link, to: "/configuracion", style: { color: "#fff" }, children: [_jsx(ListItemIcon, { style: { color: "#fff" }, children: _jsx(SettingsIcon, {}) }), _jsx(ListItemText, { primary: "Configuraci\u00F3n" })] })] })] }));
};
export default Sidebar;
