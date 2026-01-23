/*Ejercicio 1: Palíndromo 
Escribe una función que determine si una cadena dada es un palíndromo. Un palíndromo es 
una palabra, frase, número o secuencia de caracteres que se lee igual hacia adelante que 
hacia atrás, ignorando espacios, signos de puntuación y mayúsculas/minúsculas*/

function esPalindromo(texto) {
  let limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
  let invertido = limpio.split("").reverse().join("");
  return limpio === invertido;
}

// Ejemplos:
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo")); // false
