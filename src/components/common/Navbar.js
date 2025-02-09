import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (_jsxs("nav", { children: [_jsx(Link, { to: "/", children: "Inicio" }), _jsx(Link, { to: "/ingresos", children: "Ingresos" }), _jsx(Link, { to: "/egresos", children: "Egresos" }), _jsx(Link, { to: "/contabilidad", children: "Contabilidad" }), _jsx(Link, { to: "/usuarios", children: "Usuarios" }), _jsx(Link, { to: "/configuracion", children: "Configuraci\u00F3n" })] }));
};
export default Navbar;
