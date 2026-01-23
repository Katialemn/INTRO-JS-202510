// Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y 
//luego intercambiá sus valores. Muestra los valores antes y después del 
//intercambio en la consola. 
//Para intercambiar valores puedes usar varios métodos(usando una variable 
//temporal, aritmética o asignación simultánea), eres libre de elegir el que desees, 
//eso si, investiga sobre el que usarás. 

let a = 5;
let b = 10;

console.log("Antes del intercambio:", a, b);

let temp = a;
a = b;
b = temp;

console.log("Después del intercambio:", a, b);
