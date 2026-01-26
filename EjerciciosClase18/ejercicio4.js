/*Concurso de Likes 
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes, 
se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar los valores 
para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, 
cuánto el tercero y cuánto el que menos likes obtuvo —suponer que participaron 15 
usuarios y suponer para cada uno, una cantidad de likes—. */

let likes = [120, 450, 300, 50, 900, 700, 150, 230, 80, 600, 1000, 340, 270, 95, 410];

likes.sort((a, b) => b - a);

console.log("1° lugar:", likes[0]);
console.log("2° lugar:", likes[1]);
console.log("3° lugar:", likes[2]);
console.log("Menos likes:", likes[likes.length - 1]);
