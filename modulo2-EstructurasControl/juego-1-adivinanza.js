const prompt = require("prompt-sync")();

const numeroSecreto = Math.floor(Math.random() * 11);
console.log(numeroSecreto);

let numeroJugador;

while (numeroSecreto != numeroJugador) {
  numeroJugador = parseInt(
    prompt("Adivina el número secreto entre el 1 - 10 "),
  );
  if (numeroJugador === numeroSecreto) {
    console.log("Adivinaste!");
  } else if (numeroJugador < numeroSecreto) {
    console.log("El número es más grande!");
  } else if (numeroJugador > numeroSecreto) {
    console.log("El número es más pequeño!");
  } else {
    console.log("Adivinaste!");
  }
}
