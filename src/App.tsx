import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Ingresos from "./components/ingresos/Ingresos";
import Egresos from "./components/egresos/Egresos";
import Contabilidad from "./components/contabilidad/Contabilidad";
import Usuarios from "./components/usuarios/Usuarios";
import Configuracion from "./components/configuracion/Configuracion";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
