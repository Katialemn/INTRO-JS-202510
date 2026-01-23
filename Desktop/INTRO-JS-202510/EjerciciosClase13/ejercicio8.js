/*●	Ejercicio 8: Convertir grados Celsius a Fahrenheit 
Crea una función expresada llamada convertirCelsiusAFahrenheit que 
reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
Fórmula:
Fahrenheit = ( Celsius X 9/5) +32
*/

const convertirCelsiusAFahrenheit = function(celsius) {
  return (celsius * 9/5) + 32;
};

// Ejemplo de prueba:
console.log(convertirCelsiusAFahrenheit(25)); // 77
