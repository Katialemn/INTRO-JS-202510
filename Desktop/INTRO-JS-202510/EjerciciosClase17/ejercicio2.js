/* Análisis y Modificación de Cadenas de Texto 
Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que 
haga lo siguiente: 
1. 
Quite los espacios en blanco al principio y al final. 
2. Divida la oración en palabras. 
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g” que indica 
que se debe buscar todas las apariciones del carácter 'a' en la cadena (la bandera g 
es para global, lo que significa que reemplazará todas las apariciones, no solo la 
primera). 
4. Encuentre la posición de la primera aparición de la palabra "javascript". De no 
aparecer retornar -1 
5. Convierta la oración a una cadena de palabras separadas por guiones.*/

const prompt = require("prompt-sync")();

function procesarOracion(oracion) {
  let limpia = oracion.trim();                     // 1
  let palabras = limpia.split(" ");                // 2
  let reemplazo = limpia.replace(/a/g, "@");        // 3
  let posicion = limpia.toLowerCase().indexOf("javascript"); // 4
  let conGuiones = palabras.join("-");             // 5

  return {
    limpia,
    palabras,
    reemplazo,
    posicion,
    conGuiones
  };
}

let texto = prompt("Ingresá una oración: ");
console.log(procesarOracion(texto));

