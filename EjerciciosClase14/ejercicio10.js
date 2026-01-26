/*●	Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
1.	Inicializa un array vacío para almacenar las flores favoritas.
2.	Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push).
3.	Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
4.	Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).

*/

const prompt = require("prompt-sync")();

let flores = [];

// Agregar manualmente sin push
flores[0] = prompt("Ingresá tu primera flor favorita: ");
flores[1] = prompt("Ingresá tu segunda flor favorita: ");
flores[2] = prompt("Ingresá tu tercera flor favorita: ");

let florBuscada = prompt("¿Qué flor querés buscar?: ");

let contador = 0;

for (let i = 0; i < flores.length; i++) {
  if (flores[i] === florBuscada) {
    contador++;
  }
}

console.log(`La flor "${florBuscada}" aparece ${contador} vez/veces entre tus favoritas.`);

