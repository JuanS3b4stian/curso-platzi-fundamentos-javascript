// Funciones Puras

// Side Effects
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en la pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

// Función Impura

function sum(a, b) {
  console.log("A:", a); // Side Effect 4
  return a + b;
}

let total = 0;

function sumWithSideEffect(a) {
  total += a; // SideEffect 1
  return total;
}

// Funciones puras

function square(x) {
  return x * x;
}

function addTen(y) {
  return y + 10;
}

// Combinación de dos funciones puras --> Función pura

const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);
