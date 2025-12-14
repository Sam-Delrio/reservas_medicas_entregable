import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && pass) {
      login();
      navigate("/dashboard");
    }
  };

  return (
    <div className="page-center">
      <div className="card-glass compact-card login-card">
        <h2>Bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="Usuario" onChange={e => setUser(e.target.value)} />
          <input type="password" placeholder="Contraseña" onChange={e => setPass(e.target.value)} />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}
