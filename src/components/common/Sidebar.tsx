import React from "react";
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

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        width: 250,
        backgroundColor: "#3f51b5",
        color: "#fff",
        height: "100vh",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        padding: "20px 0",
      }}
    >
      <Typography variant="h6" style={{ padding: "0 16px", marginBottom: 20 }}>
        Sistema Administrativo
      </Typography>
      <List>
        <ListItem component={Link} to="/" style={{ color: "#fff" }}>
          <ListItemIcon style={{ color: "#fff" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem component={Link} to="/ingresos" style={{ color: "#fff" }}>
          <ListItemIcon style={{ color: "#fff" }}>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Ingresos" />
        </ListItem>
        <ListItem component={Link} to="/egresos" style={{ color: "#fff" }}>
          <ListItemIcon style={{ color: "#fff" }}>
            <MoneyOffIcon />
          </ListItemIcon>
          <ListItemText primary="Egresos" />
        </ListItem>
        <ListItem component={Link} to="/contabilidad" style={{ color: "#fff" }}>
          <ListItemIcon style={{ color: "#fff" }}>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Contabilidad" />
        </ListItem>
        <ListItem component={Link} to="/usuarios" style={{ color: "#fff" }}>
          <ListItemIcon style={{ color: "#fff" }}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItem>
        <ListItem
          component={Link}
          to="/configuracion"
          style={{ color: "#fff" }}
        >
          <ListItemIcon style={{ color: "#fff" }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Configuración" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
