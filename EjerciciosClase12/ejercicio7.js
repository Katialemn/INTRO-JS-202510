/*Ejercicio 7: Matriz 5x5 
Declara una variable que contenga una matriz de 5x5 llena de puros números 
enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en 
la matriz. */

let matriz = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

let suma = 0;

for (let fila = 0; fila < matriz.length; fila++) {
  for (let col = 0; col < matriz[fila].length; col++) {
    suma += matriz[fila][col];
  }
}

console.log("La suma total de la matriz es:", suma);
 

