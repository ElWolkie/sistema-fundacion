import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/ingresos">Ingresos</Link>
      <Link to="/egresos">Egresos</Link>
      <Link to="/contabilidad">Contabilidad</Link>
      <Link to="/usuarios">Usuarios</Link>
      <Link to="/configuracion">Configuración</Link>
    </nav>
  );
};

export default Navbar;
