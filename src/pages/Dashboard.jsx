import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getDoctors } from "../services/appointmentsService";
import { FaUserMd } from "react-icons/fa";

export default function Dashboard() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  return (
      <div className="page-center">
        <div className="dashboard-wrapper">
          <h2>Especialistas Disponibles</h2>

          <div className="doctors-grid">
            {doctors.map(d => (
              <div key={d.id} className="doctor-card">
                <div className="doctor-icon">
                  <FaUserMd />
                </div>
                <h3>{d.name}</h3>
                <p>{d.specialty}</p>
                <span>Consultorio {d.consultorio}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
