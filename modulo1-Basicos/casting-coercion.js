// Conversión Implícita
console.log("----- Conversión Implícita -----");

const numero = 2;
const booleano = true;
console.log(numero + booleano);
console.log("---------------");

const string = "42";
const integer = parseInt(string);
console.log(string);
console.log(typeof integer);
console.log("---------------");

const stringDecimal = "3.14";
const float = parseFloat(stringDecimal);
console.log(stringDecimal);
console.log(typeof float);
console.log("---------------");

const binary = "1010";
const decimal = parseInt(binary);
console.log(binary);
console.log(typeof decimal);
console.log("---------------");

const sum = "5" + 3;
console.log(sum); // Convierte 3 en un String, por ende, concatena, dando 53.

const sumWithBoolean = "3" + true;
console.log(sumWithBoolean); // Convierte true en String y concatena.

const sumWithNumber = 2 + true;
console.log(sumWithNumber); // Convierte true en Number y suma.

const stringValue = "10";
const numberValue = 20;
const booleanValue = true;
// Con String --> CONCATENA
// Sin String --> SUMAR
console.log(stringValue + stringValue);
console.log(stringValue + numberValue);
console.log(stringValue + booleanValue);
console.log(numberValue + stringValue);
console.log(numberValue + numberValue);
console.log(numberValue + booleanValue);
console.log(booleanValue + stringValue);
console.log(booleanValue + numberValue);
console.log(booleanValue + booleanValue);

console.log("---------------");

// Ejercicio
const number = "96";
const numeroConvertido = parseInt(number);

console.log(typeof number);
console.log(typeof numeroConvertido);

console.log("---------------");

// Conversión Explícita
console.log("----- Conversión Explícita -----");

const num = 2;
const numToString = num.toString();
console.log(typeof num);
console.log(typeof numToString);
console.log("---------------");
