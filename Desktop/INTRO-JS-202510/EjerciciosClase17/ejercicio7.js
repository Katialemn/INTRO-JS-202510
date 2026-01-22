/*Ejercicio 7: “La Floreria” 
Escribe una función "gestionarFloreria" que realice las siguientes tareas con una lista 
predefinida de nombres de flores: let entrada = "Rosa. Tulipán, Orquídea, Lirio";
1. 
Quite los espacios en blanco alrededor de cada flor. 
2. Verifique si existe la flor "Margarita" y, si está presente, agregue "Azucena" al final de la 
lista. 
3. Reemplace todas las flores "Orquídea" por "Clavel". 
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue "Girasol" al inicio 
de la lista. 
Devuelva una cadena de flores en orden alfabético separadas por puntos. 
*/

function gestionarFloreria(entrada) {
  let flores = entrada.split(",").map(f => f.trim()); // 1

  let existeMargarita = flores.includes("Margarita"); // 2
  if (existeMargarita) flores.push("Azucena");

  flores = flores.map(f => f === "Orquídea" ? "Clavel" : f); // 3

  let indiceGirasol = flores.indexOf("Girasol"); // 4
  if (indiceGirasol === -1) flores.unshift("Girasol");

  let ordenadas = flores.sort().join("."); // 5

  return { existeMargarita, indiceGirasol, ordenadas };
}

let entradaFlores = "Rosa, Tulipán, Orquídea, Lirio";
console.log(gestionarFloreria(entradaFlores));

