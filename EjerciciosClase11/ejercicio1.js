/*Ejercicio 1: ¿Positivo, negativo o cero? 

Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida 
al usuario un número cualquiera. El programa deberá analizar si el número ingresado es 
positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje 
explicativo en cada caso.*/

const prompt = require("prompt-sync")();

const numero = parseFloat(prompt("Ingresá un número: "));

if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

