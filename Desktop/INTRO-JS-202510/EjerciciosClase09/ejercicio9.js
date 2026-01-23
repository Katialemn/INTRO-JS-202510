//Ejercicio 9:  
//Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el 
//radio de un círculo y calcula su área y perímetro utilizando la constante PI. 

const PI = 3.14159;
const radio = parseFloat(prompt("Ingresá el radio del círculo:"));

const area = PI * radio * radio;
const perimetro = 2 * PI * radio;

console.log("Área:", area);
console.log("Perímetro:", perimetro);
