const getIdUsuario = (cb) => {
  const datoADevolver = 99;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datoADevolver);
      //reject(new Error("No se encuentra el usuario"));
    }, 2000);
  });
};

getDatosUsuarioPorId = (id) => {
  const datoADevolver = {
    id: 99,
    nombre: "José Luis",
    dni: "28746331V",
  };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datoADevolver);
    }, 2000);
  });
};

const getMultasPorDNI = (dni) => {
  const datoADevolver = [150, 300, 40];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datoADevolver);
    }, 2000);
  });
};
