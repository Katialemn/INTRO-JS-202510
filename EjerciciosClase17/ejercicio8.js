/*Ejercicio 8: Lugar y números 
Para practicar la implementación del algoritmo de búsqueda binaria, vamos a empezar con 
un ejemplo simple. Quiero que se familiaricen con la sintaxis del mismo, por lo que no hare 
énfasis en los datos, sino en la solución. 
Dada la siguiente lista: let list = [1,2,3,4,5,6,7,8,9,10,11]:
Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems: 
o ¿Cuál es la posición del número 1? 
o ¿Cuál es la posición del número 5? 
o ¿Cuál es la posición del número 6? 
o ¿Cuál es la posición del número 9? 
o ¿Cuál es la posición del número 11? 
Sabemos que responder estas preguntas es extremadamente fácil, ya que podemos leer el 
array, y determinar con un cálculo visual la posición de cada elemento, pero, la propuesta 
que les hago es que codeen un algoritmo de búsqueda binaria, que “busque” ese número, 
por ejemplo, el 6, y nos indique por consola la posición del mismo. 
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir complejidad extra. 
*/

let list = [1,2,3,4,5,6,7,8,9,10,11];

function busquedaBinaria(arr, objetivo) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arr[medio] === objetivo) return medio;
    if (arr[medio] < objetivo) inicio = medio + 1;
    else fin = medio - 1;
  }

  return -1;
}

console.log("Posición del 1:", busquedaBinaria(list, 1));
console.log("Posición del 5:", busquedaBinaria(list, 5));
console.log("Posición del 6:", busquedaBinaria(list, 6));
console.log("Posición del 9:", busquedaBinaria(list, 9));
console.log("Posición del 11:", busquedaBinaria(list, 11));
