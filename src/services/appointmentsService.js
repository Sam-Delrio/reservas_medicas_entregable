// src/services/appointmentsService.js
import {
  fakeGet,
  fakePost,
  fakeDelete
} from "./api";

/* ===================== DOCTORES ===================== */
export async function getDoctors() {
  return await fakeGet("doctors");
}

/* ===================== CITAS ===================== */
export async function getAppointments() {
  const appointments = await fakeGet("appointments");
  const doctors = await fakeGet("doctors");

  return appointments.map(app => {
    const doctor = doctors.find(d => d.id === app.doctorId);
    return {
      id: app.id,
      date: app.date,
      doctorName: doctor?.name || "Desconocido",
      consultorio: doctor?.consultorio || "Sin asignar"
    };
  });
}

export async function createAppointment(data) {
  return await fakePost("appointments", data);
}

export async function deleteAppointment(id) {
  return await fakeDelete("appointments", id);
}
