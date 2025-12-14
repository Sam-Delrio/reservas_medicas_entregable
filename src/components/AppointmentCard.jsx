import React from "react";

export default function AppointmentCard({ app, onCancel }) {
  return (
    <div className="card-small appointment-card">
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div>
          <div style={{ fontWeight:700 }}>{app.doctor}</div>
          <div style={{ color:"rgba(255,255,255,0.8)", fontSize:13 }}>{app.reason || "Consulta general"}</div>
        </div>

        <div style={{ textAlign:"right" }}>
          <div style={{ fontWeight:700 }}>{app.date} • {app.time}</div>
          <div style={{ color:"rgba(255,255,255,0.7)", fontSize:13 }}>{app.status}</div>
        </div>
      </div>

      <div style={{ marginTop:10, display:"flex", gap:8, justifyContent:"flex-end" }}>
        <button className="btn" onClick={() => alert("Reprogramar no implementado en mock")}>Reprogramar</button>
        <button className="btn" onClick={() => onCancel(app.id)}>Cancelar</button>
      </div>
    </div>
  );
}
