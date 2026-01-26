//Ejercicio 2:  
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores 
//numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está 
//dentro del rango definido por las constantes.

const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 50;

const numero = parseFloat(prompt("Ingresá un número:"));

if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
  console.log("El número está dentro del rango");
} else {
  console.log("El número está fuera del rango");
}

