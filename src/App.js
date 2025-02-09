import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Ingresos from "./components/ingresos/Ingresos";
import Egresos from "./components/egresos/Egresos";
import Contabilidad from "./components/contabilidad/Contabilidad";
import Usuarios from "./components/usuarios/Usuarios";
import Configuracion from "./components/configuracion/Configuracion";
import "./App.css";
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
  return _jsxs(ThemeProvider, {
    theme: theme,
    children: [
      _jsx(CssBaseline, {}),
      " ",
      _jsx(Router, {
        children: _jsxs("div", {
          className: "app-container",
          children: [
            _jsx(Sidebar, {}),
            _jsx("div", {
              className: "main-content",
              children: _jsxs(Routes, {
                children: [
                  _jsx(Route, { path: "/", element: _jsx(Dashboard, {}) }),
                  _jsx(Route, {
                    path: "/ingresos",
                    element: _jsx(Ingresos, {}),
                  }),
                  _jsx(Route, { path: "/egresos", element: _jsx(Egresos, {}) }),
                  _jsx(Route, {
                    path: "/contabilidad",
                    element: _jsx(Contabilidad, {}),
                  }),
                  _jsx(Route, {
                    path: "/usuarios",
                    element: _jsx(Usuarios, {}),
                  }),
                  _jsx(Route, {
                    path: "/configuracion",
                    element: _jsx(Configuracion, {}),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
export default App;
