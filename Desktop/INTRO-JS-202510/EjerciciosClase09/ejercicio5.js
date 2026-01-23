//Ejercicio 5: 
//Escribe un programa que pida al usuario que ingrese tres números y determine 
//cuál es el mayor de los tres.//

const n1 = parseFloat(prompt("Ingresá el primer número:"));
const n2 = parseFloat(prompt("Ingresá el segundo número:"));
const n3 = parseFloat(prompt("Ingresá el tercer número:"));

let mayor = n1;

if (n2 > mayor) mayor = n2;
if (n3 > mayor) mayor = n3;

console.log("El número mayor es:", mayor);
