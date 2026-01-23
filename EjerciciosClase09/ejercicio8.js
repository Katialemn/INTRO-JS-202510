//Ejercicio 8:  
//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. 
//Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga 
//sobre los triángulos para determinar la formula)

const lado1 = parseFloat(prompt("Ingresá el primer lado:"));
const lado2 = parseFloat(prompt("Ingresá el segundo lado:"));
const lado3 = parseFloat(prompt("Ingresá el tercer lado:"));

if (lado1 === lado2 && lado2 === lado3) {
  console.log("El triángulo es equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  console.log("El triángulo es isósceles");
} else {
  console.log("El triángulo es escaleno");
}

