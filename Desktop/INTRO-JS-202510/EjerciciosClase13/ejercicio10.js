/*Ejercicio 10: Factorial de un número 
Crea una función expresada llamada calcularFactorial que reciba 
un número y devuelva su factorial.
Fórmula del factorial:n! = n x (n -1) x ...x1*/

const calcularFactorial = function (n) {
  let resultado = 1;

  for (let i = n; i > 0; i--) {
    resultado *= i;
  }

  return resultado;
};

// Ejemplo:
console.log(calcularFactorial(5)); // 120

