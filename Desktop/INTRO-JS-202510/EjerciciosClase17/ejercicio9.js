/*buscar 
la posición de un número en un array), pero partiendo de esta lista:                                              let list =[12,3,5,7,1,22,47,100];
Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, 
utilizando bubble sort. Luego, respondan las siguientes preguntas: 
o ¿Cuál es la posición del número 12? 
o ¿Cuál es la posición del número 5? 
o ¿Cuál es la posición del número 22? 
o ¿Cuál es la posición del número 100?
*/

let list2 = [12, 3, 5, 7, 1, 22, 47, 100];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let ordenada = bubbleSort(list2);

console.log("Lista ordenada:", ordenada);

console.log("Posición del 12:", busquedaBinaria(ordenada, 12));
console.log("Posición del 5:", busquedaBinaria(ordenada, 5));
console.log("Posición del 22:", busquedaBinaria(ordenada, 22));
console.log("Posición del 100:", busquedaBinaria(ordenada, 100));

