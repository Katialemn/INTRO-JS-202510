/*Ejercicio 9: Última aparición de un modelo de auto 
Se está realizando el desarrollo de una aplicación para control de gastos. Cada 
día, el usuario ingresa sus gastos cotidianos. 
La idea es solo registrar el total de los gastos, al finalizar la jornada. 
Para simplificar, vamos a considerar que todos los meses tienen cuatro 
semanas. 
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y 
cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, 
día 1, columna 1, día 2, etcétera.  
a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos 
que cada fila representa una semana, es decir, si nos indican semana 2 
tenemos que sumar la fila 1 de la matriz. Recordar que las matrices 
comienzan siempre en posición 0.  
b) La aplicación también tendrá una parte de estadísticas, para esto nos 
solicitan dar el total de un día en particular, por ejemplo del día 3, acá 
también tengamos en cuenta lo que ocurre con las filas, ya que las columnas 
también comienzan en 0. 
c) Por último, es necesario tener el total de gastos realizados en el mes. 
✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para 
resolver este último punto? 
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día 
que más gastos se realizaron. 
✔ Posibles matrices para comprobar los resultados. 
Día 1 Día 2 Día 3 Día 4 Día 5 Día 6 Día 7 
Semana 1  1135  2500  900  1600  2800  650  1100 
Semana 2  1750  1890  1900  1300  898  1750  2800 
Semana 3  1700  1150  1690  1900  1770  500  2560 
Semana 4  800  1250  1430  2100  1980  1270  950*/


let gastos = [
  [1135, 2500, 900, 1600, 2800, 650, 1100],   // Semana 1
  [1750, 1890, 1900, 1300, 898, 1750, 2800],  // Semana 2
  [1700, 1150, 1690, 1900, 1770, 500, 2560],  // Semana 3
  [800, 1250, 1430, 2100, 1980, 1270, 950]    // Semana 4
];

function totalSemana(semana) {
  let fila = semana - 1; 
  let suma = 0;

  for (let i = 0; i < gastos[fila].length; i++) {
    suma += gastos[fila][i];
  }

  return suma;
}
function totalDia(dia) {
  let col = dia - 1;
  let suma = 0;

  for (let fila = 0; fila < gastos.length; fila++) {
    suma += gastos[fila][col];
  }

  return suma;
}
function totalMes() {
  let suma = 0;

  for (let fila = 0; fila < gastos.length; fila++) {
    for (let col = 0; col < gastos[fila].length; col++) {
      suma += gastos[fila][col];
    }
  }

  return suma;
}
function semanaMasGastos() {
  let maxGasto = 0;
  let semanaMax = 0;

  for (let i = 0; i < gastos.length; i++) {
    let suma = gastos[i].reduce((a, b) => a + b, 0);

    if (suma > maxGasto) {
      maxGasto = suma;
      semanaMax = i + 1;
    }
  }

  return semanaMax;
}
function diaMasGastos() {
  let maxGasto = 0;
  let diaMax = 0;

  for (let col = 0; col < 7; col++) {
    let suma = 0;

    for (let fila = 0; fila < 4; fila++) {
      suma += gastos[fila][col];
    }

    if (suma > maxGasto) {
      maxGasto = suma;
      diaMax = col + 1;
    }
  }

  return diaMax;
}
console.log("Total semana 2:", totalSemana(2));
console.log("Total día 3:", totalDia(3));
console.log("Total del mes:", totalMes());
console.log("Semana con más gastos:", semanaMasGastos());
console.log("Día con más gastos:", diaMasGastos());
