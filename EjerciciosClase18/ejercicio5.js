/*Ejercicio 5: Servicio meteorológico 
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un objeto 
temperatura donde registra día —valor numérico del día—, mes —valor numérico—, 
temperatura máxima y temperatura mínima, correspondiente a dicho día. Las temperaturas 
—objeto temperatura— están cargados en un array. 
a) Ordenar por temperatura mínima de menor a mayor. 
b) Ordenar por temperatura máxima de mayor a menor. */

let temperaturas = [
  { dia: 1, mes: 1, max: 30, min: 20 },
  { dia: 2, mes: 1, max: 28, min: 18 },
  { dia: 3, mes: 1, max: 32, min: 22 }
];

// a) Ordenar por mínima (menor a mayor)
let porMinima = [...temperaturas].sort((a, b) => a.min - b.min);

// b) Ordenar por máxima (mayor a menor)
let porMaxima = [...temperaturas].sort((a, b) => b.max - a.max);

console.log("Por mínima:", porMinima);
console.log("Por máxima:", porMaxima);
