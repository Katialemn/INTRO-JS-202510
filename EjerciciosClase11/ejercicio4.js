/* Ejercicio 4: ¿Es par o impar? 
Consigna: 
Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un 
número y determine si es par o impar. Muestra un mensaje explicativo indicando qué 
significa cada caso. */

const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Ingresá un número: "));

if (numero % 2 === 0) {
  console.log("El número es par (se puede dividir por 2).");
} else {
  console.log("El número es impar (no se puede dividir por 2).");
}
