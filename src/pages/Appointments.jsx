import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAppointments, deleteAppointment } from "../services/appointmentsService";

export default function Appointments() {
  const [list, setList] = useState([]);

  const load = () => getAppointments().then(setList);

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    await deleteAppointment(id);
    load();
  };

  return (
      <div className="page-center">
        <div className="appointments-wrapper">
          <h2>Mis Citas</h2>

          {list.map(a => (
            <div key={a.id} className="appointment-item compact-card">
              <h3>{a.doctorName}</h3>
              <p>📅 {a.date}</p>
              <p>🏥 Consultorio {a.consultorio}</p>
              <button
                className="btn-cancel"
                onClick={() => handleDelete(a.id)}
              >
                Cancelar
              </button>
            </div>
          ))}
        </div>
      </div>
  );
}
