/* ●	Ejercicio 4: Número par o impar
Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar. Usa una variable local para guardar el resultado.
*/


function esPar(numero) {
  let resultado;

  if (numero % 2 === 0) {
    resultado = "Es par";
  } else {
    resultado = "Es impar";
  }

  return resultado;
}

// Ejemplo:
console.log(esPar(7)); // Es impar

