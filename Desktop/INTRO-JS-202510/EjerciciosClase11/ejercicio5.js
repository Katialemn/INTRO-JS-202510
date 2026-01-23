/*Ejercicio 5: Encuentra los números pares entre dos valores 
Consigna: 
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa 
debe mostrar todos los números pares que se encuentran entre esos dos valores, 
incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el 
inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un 
mensaje indicando que los valores son inválidos.*/

const prompt = require("prompt-sync")();

const inicio = parseInt(prompt("Ingresá el número inicial: "));
const fin = parseInt(prompt("Ingresá el número final: "));

if (inicio > fin) {
  console.log("Valores inválidos: el inicio no puede ser mayor que el final.");
} else {
  for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}



