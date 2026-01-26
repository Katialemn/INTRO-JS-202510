//Ejercicio 3: 
//Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que 
//ingrese dos valores booleanos (true o false) y muestra el resultado de diversas 
//combinaciones lógicas. 

const condicion1 = prompt("Ingresá true o false:") === "true";
const condicion2 = prompt("Ingresá true o false:") === "true";

console.log("AND:", condicion1 && condicion2);
console.log("OR:", condicion1 || condicion2);
console.log("NOT condicion1:", !condicion1);
console.log("NOT condicion2:", !condicion2);

