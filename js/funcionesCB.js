const getIdUsuario = cb => {
  const datoADevolver = 99;
  setTimeout(() => {
    cb(datoADevolver);
  }, 2000);
}

getDatosUsuarioPorId = (id, cb) => {
  const datoADevolver = {
    id: 99,
    nombre: "José Luis",
    dni: "28746331V"
  }
  setTimeout(() => {
    cb(datoADevolver);
  }, 3000);
}

const getMultasPorDNI = (dni, cb) => {
  const datoADevolver = [150, 300, 40];
  setTimeout(() => {
    cb(datoADevolver);
  }, 2200);
}
