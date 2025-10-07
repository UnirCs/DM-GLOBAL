// Datos de usuarios para autenticación
export const usersData = [
  {
    id: 1,
    username: "admin",
    password: "admin123",
    email: "admin@unircinema.com",
    role: "admin",
    name: "Administrador"
  },
  {
    id: 2,
    username: "user1",
    password: "user123",
    email: "user1@unircinema.com",
    role: "user",
    name: "Usuario Demo"
  },
  {
    id: 3,
    username: "manager",
    password: "manager123",
    email: "manager@unircinema.com",
    role: "manager",
    name: "Manager Cinema"
  },
  {
    id: 4,
    username: "guest",
    password: "guest123",
    email: "guest@unircinema.com",
    role: "user",
    name: "Invitado"
  }
];

// Exportación named para coincidir con useLogin
export const users = usersData;
