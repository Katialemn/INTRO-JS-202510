//Ejercicio 3: Suma de dos números ingresados por el usuario 
//Enunciado: 
//Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores 
//aritméticos. Escribe un programa que: 
//1. 
//Pida al usuario que ingrese dos números. 
//2. Sume ambos números. 
//3. Muestre el resultado de la suma. 
//Requisitos: 
//● Utiliza prompt() para recibir los números. 
//● Utiliza parseFloat() para convertir las entradas a números. 
//● Almacena los resultados en variables adecuadas y muestra el resultado.//

const num1 = parseFloat(prompt("Ingresá el primer número:"));
const num2 = parseFloat(prompt("Ingresá el segundo número:"));

const suma = num1 + num2;

console.log("La suma es:", suma);
