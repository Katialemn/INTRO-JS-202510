/*Ejercicio 10: Adivina el número 
Consigna: 
Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, 
pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera 
de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no 
acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver 
este ejercicio.*/


const prompt = require("prompt-sync")();

const secreto = Math.floor(Math.random() * 10) + 1;
let acierto = false;

for (let i = 1; i <= 3; i++) {
  const intento = parseInt(prompt(`Intento ${i}: Adiviná el número (1-10): `));

  if (intento === secreto) {
    console.log("¡Felicitaciones! Adivinaste el número.");
    acierto = true;
    break;
  }
}

if (!acierto) {
  console.log("No adivinaste. El número secreto era:", secreto);
}
