/*Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays 
Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes 
propiedades: nombre, edad y un array de notas (con 5 notas).  
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las 
siguientes tareas: 
1. 
Agregar una nueva nota al array de notas. 
2. Eliminar la primera nota del array. 
3. Calcular el promedio de las notas restantes. 
4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el 
método “toUpperCase()” 
https://www.w3schools.com/jsref/jsref_touppercase.asp 
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas. */

let estudiante = {
  nombre: "Katiuska",
  edad: 25,
  notas: [7, 8, 9, 6, 10]
};

function procesarEstudiante(est) {
  est.notas.push(8);            // 1. Agregar nota
  est.notas.shift();            // 2. Eliminar primera nota

  let promedio = est.notas.reduce((a, b) => a + b, 0) / est.notas.length; // 3

  let nombreMayus = est.nombre.toUpperCase(); // 4

  return {                      // 5
    nombre: nombreMayus,
    promedio: promedio
  };
}

console.log(procesarEstudiante(estudiante));
