// Crear una copia con Spread Operator

const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];

console.log("Original:", originalArray);
console.log("Copiado:", copiedArray);

// Combinar arreglos con Spread Operator

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log("Array combinado:", combinedArray);

// Crear un nuevo arreglo con elementos adicionales

const baseArray = [1, 2, 3];
const extendedArray = [...baseArray, 4, 5, 6];

console.log("Array Base: " + baseArray);
console.log("Array extendido:", extendedArray);

// Pasar elementos de un arreglo a una función

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log("Resultado de la suma:", result);
