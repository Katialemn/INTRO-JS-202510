/*Encuentra la película más corta y analiza los títulos largos 
Supón que tienes una lista de películas con su duración en minutos: 
const movies = [ 
{ title: 'El Señor de los Anillos', duration: 200 }, 
{ title: 'Inception', duration: 148 }, 
{ title: 'Matrix', duration: 136 }, 
{ title: 'Toy Story', duration: 81 }, 
{ title: 'Coco', duration: 105 } 
]; 
Queremos: 
o Encontrar la película más corta en duración. 
o De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 
caracteres. 
o Crear una lista de los títulos largos en minúsculas. 
o Imprime en la consola: 
o El título de la película más corta. 
o La lista de títulos largos en minúsculas.*/

const movies = [
  { title: "El Señor de los Anillos", duration: 200 },
  { title: "Inception", duration: 148 },
  { title: "Matrix", duration: 136 },
  { title: "Toy Story", duration: 81 },
  { title: "Coco", duration: 105 }
];

// Película más corta
let masCorta = movies.reduce((min, peli) =>
  peli.duration < min.duration ? peli : min
);

let restantes = movies.filter(p => p !== masCorta);

let titulosLargos = restantes
  .filter(p => p.title.length > 10)
  .map(p => p.title.toLowerCase());

console.log("Película más corta:", masCorta.title);
console.log("Títulos largos:", titulosLargos);


