//Ejercicio 1:  
//Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese 
//dos números y muestra cuál es mayor o si son iguales. 

const numero1 = parseFloat(prompt("Ingresá el primer número:"));
const numero2 = parseFloat(prompt("Ingresá el segundo número:"));

if (numero1 > numero2) {
  console.log("El primer número es mayor");
} else if (numero2 > numero1) {
  console.log("El segundo número es mayor");
} else {
  console.log("Ambos números son iguales");
}
