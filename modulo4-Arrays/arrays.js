// Un array puede crearse por 2 métodos

// Declarando el objeto Array con new

const fruits = new Array("apple", "banana", "orange");

// Sintaxis literal del Array

const fruits2 = ["apple", "banana", "orange"];

// Un array puede almacenar diferentes tipos de variables

const mixedArray = [
  "text",
  true,
  42,
  { ingredient: "sugar", quantity: "one cup" },
];

// Para acceder a un elemento en específico del array, se hace a través sus índices

const firstFruit = fruits[0];

// Método array.lenght para analizar el tamaño del array

const tamañoArray = fruits.length;
console.log(tamañoArray);
