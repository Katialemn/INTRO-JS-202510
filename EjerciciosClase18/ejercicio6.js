/* Ejercicio 6: Ordenando personas 
¿Cómo podrías ordenar la colección, de menor a mayor, considerando solo la estatura? 
Utiliza bubble sort.
let personas = [
 { 
    nombre: "Dua", 
    apellido: "Lipa", 
    ocupacion: "cantante", 
    estatura: 173 
    }, 
    { 
    nombre: "Ariana", 
    apellido: "Grande", 
    ocupacion: "cantante", 
    estatura: 160 
    },
    { 
    nombre: "Taylor", 
    apellido: "Swift", 
    ocupacion: "cantante", 
    estatura: 180 
    }
];
*/

let personas = [
  { nombre: "Dua", apellido: "Lipa", ocupacion: "cantante", estatura: 173 },
  { nombre: "Ariana", apellido: "Grande", ocupacion: "cantante", estatura: 160 },
  { nombre: "Taylor", apellido: "Swift", ocupacion: "cantante", estatura: 180 }
];

function ordenarPorEstatura(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j].estatura > arr[j + 1].estatura) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(ordenarPorEstatura(personas));
