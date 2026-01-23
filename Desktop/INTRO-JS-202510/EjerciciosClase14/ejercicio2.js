/*Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha
para calcular el promedio.
*/

const prompt = require("prompt-sync")();

const calcularPromedio = (a, b, c, d, e) => (a + b + c + d + e) / 5;

let notas = [];
for (let i = 1; i <= 5; i++) {
  notas.push(parseFloat(prompt(`Ingresá la nota ${i}: `)));
}

console.log("El promedio es:", calcularPromedio(...notas));

