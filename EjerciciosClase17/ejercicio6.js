/* Ejercicio 6: Autos y más autos… 
Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista predefinida 
de marcas de autos:    

let  entrada = "Toyota, Honda , Ford, Chevrolet,Nissan";

1. Quite los espacios en blanco alrededor de cada marca. 
2. Verifique si existe la marca "Tesla". 
3. Reemplace todas las marcas "Ford" por "BMW". 
4. Encuentre el índice de la marca "Chevrolet".  
5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()” 
*/

function gestionarAutos(entrada) {
  let marcas = entrada.split(",").map(m => m.trim()); // 1

  let existeTesla = marcas.includes("Tesla");         // 2

  marcas = marcas.map(m => m === "Ford" ? "BMW" : m); // 3

  let indiceChevrolet = marcas.indexOf("Chevrolet");  // 4

  let ordenadas = marcas.sort().join(".");            // 5

  return { existeTesla, indiceChevrolet, ordenadas };
}

let entradaAutos = "Toyota, Honda , Ford, Chevrolet,Nissan";
console.log(gestionarAutos(entradaAutos));
