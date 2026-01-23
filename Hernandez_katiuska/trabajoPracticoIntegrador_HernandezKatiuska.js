// Curso: Introducción a JavaScript
// Profesora: Mariana Guadalupe Miño
// Alumna: Katiuska Hernández
// Trabajo Práctico Integrador: Sistema de Gestión de Biblioteca
// Archivo: trabajoPracticoIntegrador_HernandezKatiuska.js

// Para usar prompt en Node:
const prompt = require("prompt-sync")();

// -----------------------------------------------------------------------------
// PUNTO 1: ESTRUCTURA DE DATOS
// -----------------------------------------------------------------------------

// a) Array de libros (al menos 10)
let libros = [
  { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: 1967, genero: "Novela", disponible: true },
  { id: 2, titulo: "El principito", autor: "Antoine de Saint-Exupéry", anio: 1943, genero: "Infantil", disponible: true },
  { id: 3, titulo: "1984", autor: "George Orwell", anio: 1949, genero: "Distopía", disponible: true },
  { id: 4, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anio: 1605, genero: "Clásico", disponible: true },
  { id: 5, titulo: "Rayuela", autor: "Julio Cortázar", anio: 1963, genero: "Novela", disponible: true },
  { id: 6, titulo: "Ficciones", autor: "Jorge Luis Borges", anio: 1944, genero: "Cuentos", disponible: true },
  { id: 7, titulo: "La metamorfosis", autor: "Franz Kafka", anio: 1915, genero: "Novela", disponible: true },
  { id: 8, titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", anio: 1866, genero: "Novela", disponible: true },
  { id: 9, titulo: "Orgullo y prejuicio", autor: "Jane Austen", anio: 1813, genero: "Romance", disponible: true },
  { id: 10, titulo: "It", autor: "Stephen King", anio: 1986, genero: "Terror", disponible: true }
];

// b) Array de usuarios (al menos 5)
let usuarios = [
  { id: 1, nombre: "Ana", email: "ana@example.com", librosPrestados: [] },
  { id: 2, nombre: "Luis", email: "luis@example.com", librosPrestados: [] },
  { id: 3, nombre: "María", email: "maria@example.com", librosPrestados: [] },
  { id: 4, nombre: "Pedro", email: "pedro@example.com", librosPrestados: [] },
  { id: 5, nombre: "Sofía", email: "sofia@example.com", librosPrestados: [] }
];

// -----------------------------------------------------------------------------
// PUNTO 2: FUNCIONES DE GESTIÓN DE LIBROS
// -----------------------------------------------------------------------------

// a) Agregar libro
function agregarLibro(id, titulo, autor, anio, genero) {
  let nuevoLibro = {
    id: id,
    titulo: titulo,
    autor: autor,
    anio: anio,
    genero: genero,
    disponible: true
  };
  libros.push(nuevoLibro);
  console.log("Libro agregado:", nuevoLibro);
}

// b) Buscar libro por criterio (título, autor o género) usando búsqueda lineal
function buscarLibro(criterio, valor) {
  let resultados = [];

  for (let i = 0; i < libros.length; i++) {
    if (libros[i][criterio] && libros[i][criterio].toString().toLowerCase() === valor.toLowerCase()) {
      resultados.push(libros[i]);
    }
  }

  return resultados;
}

// c) Ordenar libros por título o año usando bubble sort
function ordenarLibros(criterio) {
  let n = libros.length;
  let copia = [...libros]; // para no modificar el original

  for (let i = 0; i < n; i++) { // primer FOR
    for (let j = 0; j < n - 1; j++) { // segundo FOR
      if (copia[j][criterio] > copia[j + 1][criterio]) {
        let temp = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = temp;
      }
    }
  }

  console.log("Libros ordenados por", criterio, ":");
  console.log(copia);
  return copia;
}

// d) Borrar libro por id
function borrarLibro(id) {
  let indice = libros.findIndex(libro => libro.id === id);

  if (indice !== -1) {
    let eliminado = libros.splice(indice, 1);
    console.log("Libro eliminado:", eliminado[0]);
  } else {
    console.log("No se encontró un libro con ese ID.");
  }
}

// -----------------------------------------------------------------------------
// PUNTO 3: GESTIÓN DE USUARIOS
// -----------------------------------------------------------------------------

// a) Registrar usuario
function registrarUsuario(nombre, email) {
  let nuevoId = usuarios.length + 1;
  let nuevoUsuario = {
    id: nuevoId,
    nombre: nombre,
    email: email,
    librosPrestados: []
  };
  usuarios.push(nuevoUsuario);
  console.log("Usuario registrado:", nuevoUsuario);
}

// b) Mostrar todos los usuarios
function mostrarTodosLosUsuarios() {
  console.log("Lista de usuarios:");
  console.log(usuarios);
  return usuarios;
}

// c) Buscar usuario por email
function buscarUsuario(email) {
  let usuario = usuarios.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (usuario) {
    console.log("Usuario encontrado:", usuario);
  } else {
    console.log("No se encontró usuario con ese email.");
  }
  return usuario;
}

// d) Borrar usuario por nombre y email
function borrarUsuario(nombre, email) {
  let indice = usuarios.findIndex(
    u => u.nombre.toLowerCase() === nombre.toLowerCase() && u.email.toLowerCase() === email.toLowerCase()
  );

  if (indice !== -1) {
    let eliminado = usuarios.splice(indice, 1);
    console.log("Usuario eliminado:", eliminado[0]);
  } else {
    console.log("No se encontró usuario con esos datos.");
  }
}

// -----------------------------------------------------------------------------
// PUNTO 4: SISTEMA DE PRÉSTAMOS
// -----------------------------------------------------------------------------

// a) Prestar libro
function prestarLibro(idLibro, idUsuario) {
  let libro = libros.find(l => l.id === idLibro);
  let usuario = usuarios.find(u => u.id === idUsuario);

  if (!libro) {
    console.log("Libro no encontrado.");
    return;
  }
  if (!usuario) {
    console.log("Usuario no encontrado.");
    return;
  }
  if (!libro.disponible) {
    console.log("El libro no está disponible.");
    return;
  }

  libro.disponible = false;
  usuario.librosPrestados.push(idLibro);
  console.log(`Libro "${libro.titulo}" prestado a ${usuario.nombre}.`);
}

// b) Devolver libro
function devolverLibro(idLibro, idUsuario) {
  let libro = libros.find(l => l.id === idLibro);
  let usuario = usuarios.find(u => u.id === idUsuario);

  if (!libro || !usuario) {
    console.log("Libro o usuario no encontrado.");
    return;
  }

  libro.disponible = true;
  usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro);
  console.log(`Libro "${libro.titulo}" devuelto por ${usuario.nombre}.`);
}

// -----------------------------------------------------------------------------
// PUNTO 5: REPORTE DE LIBROS (map, filter, reduce)
// -----------------------------------------------------------------------------

function generarReporteLibros() {
  let totalLibros = libros.length;

  let librosPrestados = libros.filter(l => !l.disponible).length;

  let librosPorGenero = libros.reduce((acum, libro) => {
    if (!acum[libro.genero]) {
      acum[libro.genero] = 0;
    }
    acum[libro.genero]++;
    return acum;
  }, {});

  let masAntiguo = libros.reduce((min, libro) => libro.anio < min.anio ? libro : min, libros[0]);
  let masNuevo = libros.reduce((max, libro) => libro.anio > max.anio ? libro : max, libros[0]);

  console.log("Cantidad total de libros:", totalLibros);
  console.log("Cantidad de libros prestados:", librosPrestados);
  console.log("Cantidad de libros por género:", librosPorGenero);
  console.log("Libro más antiguo:", masAntiguo);
  console.log("Libro más nuevo:", masNuevo);
}

// -----------------------------------------------------------------------------
// PUNTO 6: LIBROS CON MÁS DE UNA PALABRA EN EL TÍTULO (SOLO LETRAS)
// -----------------------------------------------------------------------------

function librosConPalabrasEnTitulo() {
  let soloLetrasYEspacios = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;

  let resultado = libros
    .filter(libro => {
      // Verificamos que el título tenga solo letras y espacios
      if (!soloLetrasYEspacios.test(libro.titulo)) return false;

      // Contamos palabras
      let palabras = libro.titulo.trim().split(/\s+/);
      return palabras.length > 1;
    })
    .map(libro => libro.titulo);

  console.log("Libros con más de una palabra en el título (solo letras):");
  console.log(resultado);
  return resultado;
}

// -----------------------------------------------------------------------------
// PUNTO 7: CÁLCULOS ESTADÍSTICOS (Math)
// -----------------------------------------------------------------------------

function calcularEstadisticas() {
  let anios = libros.map(l => l.anio);

  // Promedio de años
  let suma = anios.reduce((a, b) => a + b, 0);
  let promedio = suma / anios.length;

  // Año más frecuente (moda)
  let conteo = {};
  anios.forEach(anio => {
    conteo[anio] = (conteo[anio] || 0) + 1;
  });

  let anioMasFrecuente = null;
  let maxFrecuencia = 0;

  for (let anio in conteo) {
    if (conteo[anio] > maxFrecuencia) {
      maxFrecuencia = conteo[anio];
      anioMasFrecuente = anio;
    }
  }

  // Diferencia entre más antiguo y más nuevo
  let minAnio = Math.min(...anios);
  let maxAnio = Math.max(...anios);
  let diferencia = maxAnio - minAnio;

  console.log("Promedio de años de publicación:", promedio);
  console.log("Año de publicación más frecuente:", anioMasFrecuente);
  console.log("Diferencia entre el libro más antiguo y el más nuevo:", diferencia);
}

// -----------------------------------------------------------------------------
// PUNTO 8: MANEJO DE CADENAS
// -----------------------------------------------------------------------------

function normalizarDatos() {
  // Títulos a mayúsculas
  libros = libros.map(libro => ({
    ...libro,
    titulo: libro.titulo.toUpperCase(),
    autor: libro.autor.trim()
  }));

  // Emails de usuarios a minúsculas
  usuarios = usuarios.map(usuario => ({
    ...usuario,
    email: usuario.email.toLowerCase()
  }));

  console.log("Datos normalizados.");
}

// -----------------------------------------------------------------------------
// PUNTO 9: MENÚ PRINCIPAL POR CONSOLA
// -----------------------------------------------------------------------------

function menuPrincipal() {
  let opcion;

  do {
    console.log("\n--- MENÚ PRINCIPAL ---");
    console.log("1. Ver todos los libros");
    console.log("2. Agregar libro");
    console.log("3. Buscar libro por título");
    console.log("4. Ordenar libros por año");
    console.log("5. Ver todos los usuarios");
    console.log("6. Registrar usuario");
    console.log("7. Prestar libro");
    console.log("8. Devolver libro");
    console.log("9. Generar reporte de libros");
    console.log("10. Calcular estadísticas");
    console.log("11. Normalizar datos");
    console.log("0. Salir");

    opcion = prompt("Elegí una opción: ");

    switch (opcion) {
      case "1":
        console.log(libros);
        break;
      case "2":
        let id = parseInt(prompt("ID del libro: "));
        let titulo = prompt("Título: ");
        let autor = prompt("Autor: ");
        let anio = parseInt(prompt("Año: "));
        let genero = prompt("Género: ");
        agregarLibro(id, titulo, autor, anio, genero);
        break;
      case "3":
        let tituloBuscado = prompt("Título a buscar: ");
        console.log(buscarLibro("titulo", tituloBuscado));
        break;
      case "4":
        ordenarLibros("anio");
        break;
      case "5":
        mostrarTodosLosUsuarios();
        break;
      case "6":
        let nombreUsuario = prompt("Nombre: ");
        let emailUsuario = prompt("Email: ");
        registrarUsuario(nombreUsuario, emailUsuario);
        break;
      case "7":
        let idLibroPrestamo = parseInt(prompt("ID del libro a prestar: "));
        let idUsuarioPrestamo = parseInt(prompt("ID del usuario: "));
        prestarLibro(idLibroPrestamo, idUsuarioPrestamo);
        break;
      case "8":
        let idLibroDevolver = parseInt(prompt("ID del libro a devolver: "));
        let idUsuarioDevolver = parseInt(prompt("ID del usuario: "));
        devolverLibro(idLibroDevolver, idUsuarioDevolver);
        break;
      case "9":
        generarReporteLibros();
        break;
      case "10":
        calcularEstadisticas();
        break;
      case "11":
        normalizarDatos();
        break;
      case "0":
        console.log("Saliendo del sistema...");
        break;
      default:
        console.log("Opción no válida.");
    }

  } while (opcion !== "0");
}

// -----------------------------------------------------------------------------
// PUNTO 10: COMENTANDO MI CÓDIGO
// -----------------------------------------------------------------------------
//******************************************************************************
//  */ PUNTO 1: ESTRUCTURA DE DATOS 
// Se crean los datos base del sistema: libros y usuarios.
//*******************************************************************************
// a) Se crea una ARRAY de OBJETOS llamado "libros".
// Cada libro tiene:
// id -> número
// titulo -> texto
// autor -> texto
// anio -> número (sin "ñ" para evitar qe se rompa el código ) y como buena práctica
// genero -> texto
// didponible -> true o false 
// b) Se crea un ARRAY de OBJETOS llamado "usuarios".
// Cada ususario tiene:
// id -> número
// nombre -> texto
// email -> texto
// librosPrestados -> array de IDs de libros
//***********************************************************************************
//  */ PUNTO 2:  FUNCIONES DE GESTIÓN DE LIBROS
// Se crean funciones paea agregar, buscar, ordenar y borrar libros.
//***********************************************************************************
// a) AGREGAR LIBROS 
// La función recibe datos y crea un nuevo objeto libro.
// Luego lo agrega al array "libros" usando push() lo agrega al final del array.
// b) BUSCAR LIBRO
// Se realiza la busqueda lineal recooriendo el array con un FOR
// Se va comparando cada libro con el criterio de la busqueda
// libros[i][criterio] ---> accede al titulo o autor o genero for (let i = 0; i < libros.length; i++) {
// c) ORDENAR LIBROS
// Bubble sort compara elementos de a pares y los intercambia si están mal
// d) BORRAR LIBRO
// Se usa findIndex () para encontrar la posición del libro
//******************************************************************************************
//  */  PUNTO 3 : GESTIÓN DE USUARIOS
// Se crea funciones para agregar, mostrar, buscar y borrar usuarios.
//******************************************************************************************
// a) REGISTRAR USUARIO 
// Con est finción se cea un nuevo objeto usuario y lo agrega al array "usuario"
// Se usa push para agrega al final del array 
// b) MOSTRAR TODOS LOS USUARIOS
// Esta función simplemente muestra el array completo
// c) BUSCAR USUARIO POR EMAIL
// Se coloca la find() --> con ello buscamos el PRIMER elemento quecumpla la condición
// d) BORRAR USUARIOS 
// Se esa finIndex() --> que nos devolvera la posición de usuario en el array
// Se usa splice(indice, 1) ---> con ello eliminamos 1 elemento
//************************************************************************************
//   */ PUNTO 4 : SISTEMA DE PRÉSTAMOS 
//*****************************************************************************
// a) PRESTAR LIBRO
// Pasos:
// 1. Buscar el libro por ID
// 2. Buscar el usuario por ID
// 3. Verificar que el libro esté disponible
// 4. Marcarlo como NO disponible
// 5. Agregar el ID del libro al usuario
// b) DEVOLVER LIBRO
// Pasos:
// 1. Buscar libro y usuario
// 2. Marcar libro como disponible
// 3. Quitar el ID del libro del array libroPrestados
// Aqui al usar filter ()crearemos un nuevo array SIN el libro devuelto
//****************************************************************************
//    */ PUNTO 5 : REPORTE DE LIBROS 
// Se usará métodos avanzados : map(), filter(), reduce()
//***************************************************************************
// Se uso filter() para ver la cantida de libros prestados
// Se uso reduce() para ver la cantidad por genero, libros mas antiguos y libros mas nuevos 
//***********************************************************************************
//    */ PUNTO 6 : LIBROS CON MÁS DE UNA PALABRA EN EL TITULO
//*******************************************************************************
// Se establece la espresion parapermitir solo letras y espacios
// Se usa .filter, .test para solo letras
// Se usa .filter,  .trim().split("") para solo más de una palabra
//********************************************************************************
// // -----------------------------------------------------------------------------
// PUNTO 7: CÁLCULOS ESTADÍSTICOS
// En este punto vamos a practicar:
// - El uso del objeto Math (Math.min, Math.max)
// - Métodos avanzados de arrays (map, reduce, forEach)
// - Conceptos matemáticos básicos: promedio, moda, diferencia
//
// La idea es analizar los AÑOS de publicación de los libros.
// // 1) EXTRAER SOLO LOS AÑOS DE LOS LIBROS
// ---------------------------------------------------------------------------
// map() recorre el array "libros" y devuelve un NUEVO array.
// En este caso, queremos un array que contenga SOLO los años.
// Ejemplo:
// libros = [{anio: 1967}, {anio: 1943}]
// anios = [1967, 1943]

// ---------------------------------------------------------------------------
// 2) CALCULAR EL PROMEDIO DE LOS AÑOS
// ---------------------------------------------------------------------------
// reduce() sirve para "acumular" valores.
// Aquí lo usamos para sumar todos los años.
//
// reduce((acumulador, valorActual) => acumulador + valorActual, valorInicial)
// Ejemplo mental:
// anios = [1967, 1943, 1986]
// suma = 1967 + 1943 + 1986
//
// Luego dividimos por la cantidad de libros para obtener el promedio
// ---------------------------------------------------------------------------
// 3) ENCONTRAR EL AÑO MÁS FRECUENTE (MODA)
// ---------------------------------------------------------------------------
// La "moda" es el valor que más se repite.
// PASO 1: Creamos un OBJETO para contar cuántas veces aparece cada año.
// Ejemplo:
// conteo = { 1967: 1, 1943: 2, 1986: 1 }
// PASO 2: Recorremos ese objeto para encontrar el año con mayor frecuencia.
// ---------------------------------------------------------------------------
// forEach() recorre cada elemento del array "anios"
// Si el año no existe en el objeto, lo inicializamos en 0
// Luego sumamos 1
// Recorremos el objeto "conteo" con un for...in
// ---------------------------------------------------------------------------
// 4) DIFERENCIA ENTRE EL LIBRO MÁS ANTIGUO Y EL MÁS NUEVO
// ---------------------------------------------------------------------------
// Math.min(...array) → devuelve el número más pequeño
// Math.max(...array) → devuelve el número más grande
//
// Los tres puntos (...) se llaman "spread operator"
// y sirven para expandir el array en valores individuales.
//
// Ejemplo:
// Math.min(...[1967, 1943, 1986]) → Math.min(1967, 1943, 1986)
//// -----------------------------------------------------------------------------
//****************************************************************
//  */ PUNTO 8: NORMALIZAR DATOS
// Aquí se va a "limpiar" la información para que sea más consistente.
// Esto es algo MUY común en programación real.
//
// Se logra hacer 3 cosas:
//
// 1. Convertir TODOS los títulos de libros a MAYÚSCULAS.
//    → Usando .toUpperCase()
//
// 2. Quitar espacios al inicio y final de los nombres de autores.
//    → Usando .trim()
//
// 3. Convertir TODOS los emails de usuarios a minúsculas.
//    → Usando .toLowerCase()
//
// También se usó map() para crear NUEVOS arrays con los datos modificados.
// -----------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// NORMALIZAR LIBROS
// ---------------------------------------------------------------------------
// map() recorre cada libro y devuelve un NUEVO objeto libro.
// Se usó {...libro} para copiar todas las propiedades originales.
// Luego se modifica solo las que se desea  cambiar.
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// NORMALIZAR USUARIOS
// ---------------------------------------------------------------------------
// Se hace lo mismo: copiamos el usuario y modificamos el email.
// ---------------------------------------------------------------------------
//// -----------------------------------------------------------------------------
// PUNTO 9: MENÚ PRINCIPAL
// Este menú permite al usuario interactuar con el sistema.
// Usamos:
// - prompt() para pedir datos
// - switch() para elegir opciones
// - do...while para repetir el menú hasta que el usuario elija salir
// -----------------------------------------------------------------------------


