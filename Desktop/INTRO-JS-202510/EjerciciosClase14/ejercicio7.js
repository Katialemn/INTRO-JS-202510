/*Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔	título: una cadena con el título del libro.
✔	autor: una cadena con el nombre del autor del libro.
✔	anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado.
*/

let libro1 = {
  titulo: "El Principito",
  autor: "Antoine de Saint-Exupéry",
  anioPublicacion: 1943
};

let libro2 = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anioPublicacion: 1967
};

function mostrarLibro(lista) {
  for (let libro of lista) {
    console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anioPublicacion}`);
  }
}

mostrarLibro([libro1, libro2]);
