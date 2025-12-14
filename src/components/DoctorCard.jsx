import { FaUserMd } from "react-icons/fa";

export default function DoctorCard({ doctor, onSelect }) {
  return (
    <div className="doctor-item" onClick={() => onSelect(doctor)}>
      <div>
        <strong>
          <FaUserMd style={{ marginRight: 8, color: "#3ecdfd" }} />
          {doctor.name}
        </strong>
        <div style={{ fontSize: "0.85rem", color: "#8fadd1" }}>
          {doctor.specialty}
        </div>
      </div>

      <span style={{ color: "#3ecdfd", fontWeight: 600 }}>Disponible</span>
    </div>
  );
}
