const pideDatosTMB = async () => {
  try {
    const response = await fetch("url-de-tmb");
    const datos = await response.json();
    return datos;
  } catch {
    return new Error("Ha petado todo");
  }
};

(() => {
  const datos = await pideDatosTMB();
})();

const cargandoElemento = document.querySelector(".cargando");
const botonBuscar = document.querySelector(".accion button");
const idElemento = document.querySelector(".id");
const dniElemento = document.querySelector(".dni");
const multasElemento = document.querySelector(".multas");
const displayElemento = document.querySelector(".display");
let id;
let dni;
let multas;

const cargarDatosCallback = () => {
  console.log("Pidiendo id a la API");
  cargandoElemento.classList.add("on");
  getIdUsuario((idAPI) => {
    id = idAPI;
    console.log("Recibida id de la API: " + id);
    console.log("Pidiendo datos usuario a la API");
    getDatosUsuarioPorId(id, (usuarioAPI) => {
      console.log("Datos del usuario recibidos", usuarioAPI);
      dni = usuarioAPI.dni;
      console.log("Pidiendo multas del usuario");
      getMultasPorDNI(dni, (multasAPI) => {
        console.log("Multas del usuario recibidas", multasAPI);
        multas = multasAPI;
        cargandoElemento.classList.remove("on");
      });
    });
  });
};

const cargarDatosPromesas = () => {
  console.log("Pidiendo id a la API");
  cargandoElemento.classList.add("on");

  getIdUsuario()
    .then((idAPI) => {
      console.log("Id recibida", idAPI);
      id = idAPI;
      idElemento.querySelector(".dato").textContent = id;
      return getDatosUsuarioPorId(id);
    })
    .then((usuarioAPI) => {
      console.log("Usuario recibido", usuarioAPI);
      dni = usuarioAPI.dni;
      dniElemento.querySelector(".dato").textContent = dni;
      return getMultasPorDNI(dni);
    })
    .then((multasAPI) => {
      console.log("Multas recibidas", multasAPI);
      multas = multasAPI;
      multasElemento.querySelector(".dato").textContent = `${multas.join(
        "€, "
      )}€`;
      cargandoElemento.classList.remove("on");
    })
    .catch((error) => {
      console.log("Ha habido un error:", error.message);
    });
};

const cargarDatosPromesasAsyncAwait = async () => {
  console.log("Pidiendo id a la API");
  cargandoElemento.classList.add("on");
  id = await getIdUsuario();
  idElemento.querySelector(".dato").textContent = id;
  console.log("Recibida id de la API", id);
  const usuario = await getDatosUsuarioPorId(id);
  dniElemento.querySelector(".dato").textContent = usuario.dni;
  console.log("Recibido el usuario de la API", usuario);
  const multas = await getMultasPorDNI(usuario.dni);
  multasElemento.querySelector(".dato").textContent = `${multas.join("€, ")}€`;
  console.log("Recibidas multas de la API", multas);
  cargandoElemento.classList.remove("on");
};

botonBuscar.addEventListener("click", () => {
  //cargarDatosCallback();
  //cargarDatosPromesas();
  cargarDatosPromesasAsyncAwait();
});

habla(displayElemento);
