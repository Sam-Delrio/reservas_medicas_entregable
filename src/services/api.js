// src/services/api.js

const db = {
  users: [
    { id: 1, email: "admin@admin.com", password: "1234" }
  ],
  doctors: [
    { id: 1, name: "Dr. Juan Pérez", specialty: "Cardiología", consultorio: "203B" },
    { id: 2, name: "Dra. Camila Rojas", specialty: "Dermatología", consultorio: "410A" },
    { id: 3, name: "Dr. Esteban Vargas", specialty: "Odontología", consultorio: "118" }
  ],
  appointments: []
};

/* ===================== GET ===================== */
export function fakeGet(table) {
  return new Promise(resolve => {
    setTimeout(() => resolve([...db[table]]), 200);
  });
}

/* ===================== POST ===================== */
export function fakePost(table, data) {
  return new Promise(resolve => {
    setTimeout(() => {
      const item = { id: Date.now(), ...data };
      db[table].push(item);
      resolve(item);
    }, 200);
  });
}

/* ===================== DELETE ===================== */
export function fakeDelete(table, id) {
  return new Promise(resolve => {
    setTimeout(() => {
      db[table] = db[table].filter(item => item.id !== id);
      resolve(true);
    }, 200);
  });
}

/* ===================== AUTH ===================== */
export function fakeFindUser(email, password) {
  return new Promise(resolve => {
    setTimeout(() => {
      const user = db.users.find(
        u => u.email === email && u.password === password
      );
      resolve(user || null);
    }, 200);
  });
}
