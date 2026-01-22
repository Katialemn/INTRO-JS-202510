/* Ejercicio 3: Encontrar el número faltante 
Dada una matriz de n-1 números enteros únicos en el rango de 1 a n, encuentra el número 
que falta en la secuencia. */


function numeroFaltante(arr, n) {
  let sumaEsperada = (n * (n + 1)) / 2;
  let sumaReal = arr.reduce((a, b) => a + b, 0);
  return sumaEsperada - sumaReal;
}

// Ejemplo:
console.log(numeroFaltante([1,2,3,5], 5)); // 4
