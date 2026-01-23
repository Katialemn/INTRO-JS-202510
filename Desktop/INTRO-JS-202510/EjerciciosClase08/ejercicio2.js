//Ejercicio 2: Verificar si un número es positivo, negativo o cero 
//Enunciado: 
//En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un programa en 
//JavaScript que: 
//1. 
//Pida al usuario que ingrese un número. 
//2. Verifique si el número es positivo, negativo o igual a cero. 
//3. Muestre un mensaje indicando cuál es el caso. 
//Requisitos: 
//● Utilizá una estructura de control de flujo (if, else if, else) para hacer las 
//verificaciones. 
//● Usá parseFloat() para convertir la entrada del usuario a un número.

const numero = parseFloat(prompt("Ingresá un número:"));

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}
