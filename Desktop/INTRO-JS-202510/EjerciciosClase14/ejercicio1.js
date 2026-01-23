/*●	Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA.
Usa una función flecha para calcular el precio final.*/

const prompt = require("prompt-sync")();

const calcularPrecioFinal = (precio, iva) => precio + (precio * iva / 100);

let precio = parseFloat(prompt("Ingresá el precio del producto: "));
let iva = parseFloat(prompt("Ingresá el porcentaje de IVA: "));

console.log("El precio final es:", calcularPrecioFinal(precio, iva));


