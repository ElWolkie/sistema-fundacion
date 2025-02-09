import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Ingresos from "./components/ingresos/Ingresos";
import Egresos from "./components/egresos/Egresos";
import Contabilidad from "./components/contabilidad/Contabilidad";
import Usuarios from "./components/usuarios/Usuarios";
import Configuracion from "./components/configuracion/Configuracion";
import "./App.css"; // Importa los estilos de App.css

// Crea un tema personalizado (opcional)
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Color primario
    },
    secondary: {
      main: "#f50057", // Color secundario
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza los estilos */}
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ingresos" element={<Ingresos />} />
              <Route path="/egresos" element={<Egresos />} />
              <Route path="/contabilidad" element={<Contabilidad />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/configuracion" element={<Configuracion />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
