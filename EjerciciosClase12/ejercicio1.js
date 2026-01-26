/*Ejercicio 1: While 
Crea un programa que solicite al usuario ingresar números continuamente hasta 
que el usuario ingrese un número negativo. Luego, imprime la suma de todos los 
números ingresados.*/

const prompt = require("prompt-sync")();

let numero = 0;
let suma = 0;

while (numero >= 0) {
  numero = parseFloat(prompt("Ingresá un número (negativo para terminar): "));
  if (numero >= 0) {
    suma += numero;
  }
}

console.log("La suma de los números ingresados es:", suma);


