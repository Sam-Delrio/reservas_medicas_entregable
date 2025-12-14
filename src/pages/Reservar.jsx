import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  getDoctors,
  createAppointment
} from "../services/appointmentsService";

export default function Reservar() {
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!doctorId || !date) return;

    await createAppointment({
      doctorId: Number(doctorId),
      date
    });

    setDoctorId("");
    setDate("");
    alert("Cita reservada correctamente");
  };

  return (
      <div className="page-center">
        <div className="card-glass compact-card">
          <h2>Reservar Cita</h2>

          <form onSubmit={handleSubmit}>
            <label>Especialista</label>
            <select
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
            >
              <option value="">Seleccione especialista</option>
              {doctors.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} — {d.specialty}
                </option>
              ))}
            </select>

            <label>Fecha</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button type="submit">Reservar</button>
          </form>
        </div>
      </div>
  );
}
