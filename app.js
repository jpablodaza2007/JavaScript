// CRUD de Usuarios - SENA

// 1. Recuperamos o inicializamos los usuarios
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// 2. Referencias a elementos HTML
const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const claveInput = document.getElementById("clave");
const indiceInput = document.getElementById("indice");
const btnGuardar = document.getElementById("btnGuardar");
const tablaBody = document.querySelector("#tablaUsuarios tbody");


// Crear 
function crearUsuario(nombre, correo, clave) {
  const usuario = { nombre, correo, clave };
  usuarios.push(usuario);
  guardarEnLocalStorage();
  mostrarUsuarios();
  limpiarFormulario();
}

// Leer
function mostrarUsuarios() {
  tablaBody.innerHTML = ""; // limpia la tabla
  usuarios.forEach((usuario, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${usuario.nombre}</td>
      <td>${usuario.correo}</td>
      <td>
        <button onclick="editarUsuario(${index})">Editar</button>
        <button onclick="eliminarUsuario(${index})">Eliminar</button>
      </td>
    `;
    tablaBody.appendChild(fila);
  });
}

// Actualizar
function actualizarUsuario(indice, nombre, correo, clave) {
  if (usuarios[indice]) {
    usuarios[indice] = { nombre, correo, clave };
    guardarEnLocalStorage();
    mostrarUsuarios();
    limpiarFormulario();
  }
}

// Eliminar
function eliminarUsuario(indice) {
  if (confirm("¿Deseas eliminar este usuario?")) {
    usuarios.splice(indice, 1);
    guardarEnLocalStorage();
    mostrarUsuarios();
  }
}


// Guardar en localStorage 
function guardarEnLocalStorage() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Limpiar campos del formulario
function limpiarFormulario() {
  nombreInput.value = "";
  correoInput.value = "";
  claveInput.value = "";
  indiceInput.value = "";
  btnGuardar.textContent = "Guardar";
}

// Cargar datos en los campos para editar
function editarUsuario(indice) {
  const usuario = usuarios[indice];
  nombreInput.value = usuario.nombre;
  correoInput.value = usuario.correo;
  claveInput.value = usuario.clave;
  indiceInput.value = indice;
  btnGuardar.textContent = "Actualizar";
}

btnGuardar.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  const correo = correoInput.value.trim();
  const clave = claveInput.value.trim();
  const indice = indiceInput.value;

  // Validaciones básicas
  if (!nombre || !correo || !clave) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (indice === "") {
    crearUsuario(nombre, correo, clave);
  } else {
    actualizarUsuario(indice, nombre, correo, clave);
  }
});

mostrarUsuarios();