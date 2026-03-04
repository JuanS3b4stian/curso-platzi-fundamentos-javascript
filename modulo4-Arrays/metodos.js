// Método push() --> Método de agregado de uno o más elementos. MUTABLE

let countries = ["USA", "Canada", "UK"];
let newCountries = countries.push("Germany", "Australia");

console.log(countries);
console.log(newCountries);

// Método pop() --> Método que remueve el último elemento de un Array

let removedCountry = countries.pop();

console.log(removedCountry);
console.log(countries);

// Método unshift() --> Agrega elementos al inicio del Array

let agregarAlInicio = countries.unshift("Colombia");
console.log(countries);

// Método shift() --> Elimina el primer elemento del Array

let eliminarPrimerElemento = countries.shift();
console.log(countries);

// Método map() --> Crea un nuevo array con base a una función proporcionada

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map((num) => num * num);

console.log(numbers);
console.log(squaredNumbers);

// Método forEach() --> Similar a map(), pero NO crea un nuevo array, solo ejecuta la función dada sobre cada valor

let colors = ["red", "pink", "blue"];
colors.forEach((color) => console.log(color));

// Ejemplos de Caso de Uso para forEach() y map()

// Transformar Temperaturas Farenheit a Celcius
// Se usa map() porque con base a un array, debemos cambiarlo y retornar un array distinto con valores nuevos

let tempF = [32, 68, 95, 212];
let fToC = tempF.map((F) => (F - 32) * (5 / 9));

console.log(tempF);
console.log(fToC);

// Suma de elementos de un Array
// Se usa forEach() ya que no necesitamos un array nuevo

let numeros2 = [1, 2, 3, 4, 5, 6, 7];
let suma = 0;
let sumaNum = numeros2.forEach((num) => (suma += num));
console.log(suma);

// Método filter() --> Crea un nuevo array con los elementos que cumplan la condición impuesta.

let arrayN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let numPares = arrayN.filter((num) => num % 2 === 0);
console.log(arrayN);
console.log(numPares);

// Método reduce() --> Toma un array y lo reduce a un único valor aplicando una función en cada valor del array

const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(sum);

// Contar cúantas veces aparece una palabra dentro de un array.

const words = ["apple", "banana", "hello", "bye", "banana", "bye", "bye"];
const wordsFrequency = words.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});

console.log(wordsFrequency);

// Método find() --> Devuelve el primer elemento de un array que cumpla con una función dada

const multiplosDeCinco = [5, 10, 15, 20];
const primerNumeroMayorADiez = multiplosDeCinco.find((number) => number > 10);

console.log(multiplosDeCinco); // Imprime: [5, 10, 15, 20]
console.log(primerNumeroMayorADiez); // Imprime: 15

// Método findIndex() --> Devuelve el índice del primer elemento de un array que cumple con la función dada

const numerosAleatorios = [6, 14, 27, 56, 40];
const indiceNumeroMayorACincuenta = numerosAleatorios.findIndex(
  (number) => number > 50,
);

console.log(numerosAleatorios); // Imprime: [6, 14, 27, 56, 40]
console.log(indiceNumeroMayorACincuenta); // Imprime: 3

// Método slice() --> Cortar y proporcionar una parte del array inicio al final, INMUTABILIDAD

let animales = ["hormiga", "bisonte", "camello", "pato", "elefante"];

let resultado = animales.slice(2);
console.log(resultado); // ["camello", "pato", "elefante"]

let resultado2 = animales.slice(1, 4);
console.log(resultado2); // ["bisonte", "camello", "pato"]

// Obtener una copia del array sin parámetros en el slice()

let copia = animales.slice();
console.log(copia); // ["hormiga", "bisonte", "camello", "pato", "elefante"]

// Índices negativos con slice() --> Empieza a cortar desde el final al inicio

let resultado3 = animales.slice(-2);
console.log(resultado3); // ["pato", "elefante"]
