//Mini proyecto: Gestión de Usuarios y Tareas
//Integrantes del grupo:
//1. Francis Leonela Pérez Moreno
//2. Pablo Leonardo Defaz Arequipa 
//3. Katherine Elizabeth Vargas Medina

// Array de usuarios inicial
let usuarios = [
  {
    id: 1,
    nombre: "Francis",
    tareas: [
      { descripcion: "Estudiar para las pruebas", estado: "pendiente", fecha: "9/06/2025 - 13/06/2025" },
      { descripcion: "Terminar los deberes", estado: "pendiente" }
    ]
  },
  {
    id: 2,
    nombre: "Pablo",
    tareas: [
      { descripcion: "Terminar su turno de trabajo", estado: "completada" },
      { descripcion: "Hacer ejercicio", estado: "pendiente" }
    ]
  },
  {  
    id: 3,
    nombre: "Katherine",
    tareas: [
      { descripcion: "Termino el curso de cisco", estado: "pendiente", fecha: "20/06/2025" },
      { descripcion: "Ir a la entrevista de trabajo", estado: "completada", fecha: "09/06/2025" },
    ]
  }
];

// Función para mostrar el menú principal
function mostrarMenu() {
  console.log("\n MENÚ PRINCIPAL ");
  console.log("1. Ver usuarios existentes");
  console.log("2. Agregar nuevo usuario");
  console.log("3. Ver tareas de un usuario");
  console.log("4. Agregar nueva tarea a un usuario");
  console.log("5. Marcar tarea como completada");
  console.log("6. Eliminar una tarea");
  console.log("7. Salir del programa");
}

// Función para ver usuarios existentes
function verUsuarios() {
  console.log("\n USUARIOS EXISTENTES ");
  for (let usuario of usuarios) {
    console.log(`ID: ${usuario.id} - Nombre: ${usuario.nombre}`);
  }
}

// Función para agregar nuevo usuario
function agregarUsuario() {
  const nombre = prompt("Ingrese el nombre del nuevo usuario:");
  if (!nombre) {
    console.log("El nombre no puede estar vacío.");
    return;
  }

  // Generar nuevo ID (último ID + 1)
  let nuevoId = 1;
  if (usuarios.length > 0) {
    nuevoId = usuarios[usuarios.length - 1].id + 1;
  }

  const nuevoUsuario = {
    id: nuevoId,
    nombre: nombre,
    tareas: []
  };

  usuarios.push(nuevoUsuario);
  console.log(`Usuario "${nombre}" agregado con éxito (ID: ${nuevoId}).`);
}

// Función para ver tareas de un usuario
function verTareasUsuario() {
  const idUsuario = parseInt(prompt("Ingrese el ID del usuario para ver sus tareas:"));
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (!usuario) {
    console.log("Usuario no encontrado.");
    return;
  }

  console.log(`\n TAREAS DE ${usuario.nombre.toUpperCase()} `);
  if (usuario.tareas.length === 0) {
    console.log("El usuario no tiene tareas registradas.");
    return;
  }

  for (let i = 0; i < usuario.tareas.length; i++) {
    const tarea = usuario.tareas[i];
    console.log(`${i + 1}. ${tarea.descripcion} - Estado: ${tarea.estado}`);
  }
}

// Función para agregar nueva tarea a un usuario
function agregarTarea() {
  const idUsuario = parseInt(prompt("Ingrese el ID del usuario para agregar tarea:"));
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (!usuario) {
    console.log("Usuario no encontrado.");
    return;
  }

  const descripcion = prompt("Ingrese la descripción de la nueva tarea:");
  if (!descripcion) {
    console.log("La descripción no puede estar vacía.");
    return;
  }

  const nuevaTarea = {
    descripcion: descripcion,
    estado: "pendiente"
  };

  usuario.tareas.push(nuevaTarea);
  console.log(`Tarea "${descripcion}" agregada con éxito a ${usuario.nombre}.`);
}

// Función para marcar tarea como completada
function marcarTareaCompletada() {
  const idUsuario = parseInt(prompt("Ingrese el ID del usuario:"));
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (!usuario) {
    console.log("Usuario no encontrado.");
    return;
  }

  if (usuario.tareas.length === 0) {
    console.log("El usuario no tiene tareas registradas.");
    return;
  }

  console.log(`\nTareas de ${usuario.nombre}:`);
  for (let i = 0; i < usuario.tareas.length; i++) {
    const tarea = usuario.tareas[i];
    console.log(`${i + 1}. ${tarea.descripcion} - Estado: ${tarea.estado}`);
  }

  const numTarea = parseInt(prompt("Ingrese el número de la tarea a marcar como completada:")) - 1;
  if (numTarea < 0 || numTarea >= usuario.tareas.length || isNaN(numTarea)) {
    console.log("Número de tarea inválido.");
    return;
  }

  usuario.tareas[numTarea].estado = "completada";
  console.log(`Tarea "${usuario.tareas[numTarea].descripcion}" marcada como completada.`);
}

// Función para eliminar una tarea
function eliminarTarea() {
  const idUsuario = parseInt(prompt("Ingrese el ID del usuario:"));
  const usuario = usuarios.find(u => u.id === idUsuario);

  if (!usuario) {
    console.log("Usuario no encontrado.");
    return;
  }

  if (usuario.tareas.length === 0) {
    console.log("El usuario no tiene tareas registradas.");
    return;
  }

  console.log(`\nTareas de ${usuario.nombre}:`);
  for (let i = 0; i < usuario.tareas.length; i++) {
    const tarea = usuario.tareas[i];
    console.log(`${i + 1}. ${tarea.descripcion} - Estado: ${tarea.estado}`);
  }

  const numTarea = parseInt(prompt("Ingrese el número de la tarea a eliminar:")) - 1;
  if (numTarea < 0 || numTarea >= usuario.tareas.length || isNaN(numTarea)) {
    console.log("Número de tarea inválido.");
    return;
  }

  const tareaEliminada = usuario.tareas.splice(numTarea, 1)[0];
  console.log(`Tarea "${tareaEliminada.descripcion}" eliminada con éxito.`);
}

// Función principal que maneja el programa
function main() {
  console.log("Bienvenido al sistema de gestión de usuarios y tareas");
  
  let opcion;
  do {
    mostrarMenu();
    opcion = prompt(
      "Seleccione una opción del (1 al 7):\n"+
      "1. Ver usuarios existentes\n"+
      "2. Agregar nuevo usuario\n"+
      "3. Ver tareas de un usuario\n"+
      "4. Agregar nueva tarea a un usuario\n"+
      "5. Marcar tarea como completada\n"+
      "6. Eliminar una tarea\n"+
      "7. Salir del programa"
      );
    
    switch (opcion) {
      case "1":
        verUsuarios();
        break;
      case "2":
        agregarUsuario();
        break;
      case "3":
        verTareasUsuario();
        break;
      case "4":
        agregarTarea();
        break;
      case "5":
        marcarTareaCompletada();
        break;
      case "6":
        eliminarTarea();
        break;
      case "7":
        console.log("Saliendo del programa...");
        break;
      default:
        console.log("Opción no válida. Por favor, seleccione una opción del 1 al 7.");
    }
  } while (opcion !== "7");
}

// Ejemplo de uso de for in (no requerido en el menú)
function mostrarPropiedadesUsuario() {
  for (let usuario of usuarios) {
    console.log(`\nPropiedades del usuario ${usuario.nombre}:`);
    for (let propiedad in usuario) {
      console.log(`- ${propiedad}`);
    }
  }
}

// Ejemplo de uso de while (no requerido en el menú)
function contarTareasPendientes() {
  let i = 0;
  let totalPendientes = 0;
  
  while (i < usuarios.length) {
    const usuario = usuarios[i];
    let pendientesUsuario = 0;
    
    for (let tarea of usuario.tareas) {
      if (tarea.estado === "pendiente") {
        pendientesUsuario++;
      }
    }
    
    console.log(`${usuario.nombre} tiene ${pendientesUsuario} tareas pendientes.`);
    totalPendientes += pendientesUsuario;
    i++;
  }
  
  console.log(`\nTotal de tareas pendientes en el sistema: ${totalPendientes}`);
}

// Iniciar la aplicación
main();