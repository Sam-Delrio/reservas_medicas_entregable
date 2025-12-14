import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  CalendarDays,
  ClipboardList,
  LogOut
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

import "../styles/global.css";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <nav className="nav-glass">
      <div className="nav-inner">

        <Link to="/dashboard" className="nav-item">
          <Home size={20} />
          <span>Inicio</span>
        </Link>

        <Link to="/reservar" className="nav-item">
          <CalendarDays size={20} />
          <span>Reservar</span>
        </Link>

        <Link to="/citas" className="nav-item">
          <ClipboardList size={20} />
          <span>Mis Citas</span>
        </Link>

        <button onClick={logout} className="nav-item nav-logout">
          <LogOut size={20} />
          <span>Salir</span>
        </button>

      </div>
    </nav>
  );
}
