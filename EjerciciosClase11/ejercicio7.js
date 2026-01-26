/*Ejercicio 7: Calculadora simple 
Consigna: 
Crea un programa que le pida al usuario dos números y una operación matemática a 
realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa 
deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el 
programa debe mostrar un mensaje de error. Usa switch para resolverlo.*/


const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Ingresá el primer número: "));
const num2 = parseFloat(prompt("Ingresá el segundo número: "));
const operacion = prompt("Ingresá la operación (suma, resta, multiplicacion, division): ").toLowerCase();

switch (operacion) {
  case "suma":
    console.log("Resultado:", num1 + num2);
    break;
  case "resta":
    console.log("Resultado:", num1 - num2);
    break;
  case "multiplicacion":
    console.log("Resultado:", num1 * num2);
    break;
  case "division":
    console.log("Resultado:", num1 / num2);
    break;
  default:
    console.log("Operación inválida.");
}

