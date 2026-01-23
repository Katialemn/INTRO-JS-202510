/*Ejercicio 3: Gestión Compleja de Arrays 
A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que 
realice las siguientes tareas: 
1. Añada un nuevo producto al array. 
2. Elimine el último producto del array. 
3. Encuentre el índice de un producto específico. En este punto pueden usar forEach o 
investigar el método “findIndex()” 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
/Array/findIndex
4. Verifique si existe un producto con precio mayor a 50. Para esto investigar el 
método “.some()” 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Arr
ay/some
5. Devuelva una cadena de nombres de productos separados por comas. 
*/

let productos = [
  { nombre: "Mouse", precio: 20 },
  { nombre: "Teclado", precio: 45 },
  { nombre: "Monitor", precio: 150 }
];

function gestionarProductos(arr) {
  arr.push({ nombre: "Parlante", precio: 60 }); // 1
  arr.pop();                                    // 2

  let indice = arr.findIndex(p => p.nombre === "Teclado"); // 3

  let existeMayor50 = arr.some(p => p.precio > 50); // 4

  let nombres = arr.map(p => p.nombre).join(", "); // 5

  return { indice, existeMayor50, nombres };
}

console.log(gestionarProductos(productos));
