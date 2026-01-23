//Ejercicio 6:  
//Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. 
//Muestra un mensaje personalizado según el caso. 

const edad = parseInt(prompt("Ingresá tu edad:"));

if (edad >= 18) {
  console.log("Sos mayor de edad");
} else {
  console.log("Sos menor de edad");
}
