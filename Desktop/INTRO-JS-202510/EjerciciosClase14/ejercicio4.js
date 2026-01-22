/*●	Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio 
unitario. Usa una función flecha para calcular el total con descuento según la cantidad.
*/
const prompt = require("prompt-sync")();

const calcularTotal = (cantidad, precio) => {
  let descuento = 0;

  if (cantidad >= 10) descuento = 0.20;
  else if (cantidad >= 5) descuento = 0.10;

  return cantidad * precio * (1 - descuento);
};

let cantidad = parseInt(prompt("Cantidad comprada: "));
let precio = parseFloat(prompt("Precio unitario: "));

console.log("Total a pagar:", calcularTotal(cantidad, precio));
