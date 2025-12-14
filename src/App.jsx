import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Reservar from "./pages/Reservar";
import Appointments from "./pages/Appointments";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";

function PrivateRoute({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" />;
}

export default function App() {
  const { isAuth } = useAuth();

  return (
    <>
      {isAuth && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/reservar"
          element={
            <PrivateRoute>
              <Reservar />
            </PrivateRoute>
          }
        />

        <Route
          path="/citas"
          element={
            <PrivateRoute>
              <Appointments />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
}
