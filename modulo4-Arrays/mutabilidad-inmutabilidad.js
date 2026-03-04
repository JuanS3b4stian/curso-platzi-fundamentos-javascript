// Método push() para agregar elementos al Array --> Método MUTABLE

let frutas = ["apple", "banana", "orange"];
frutas.push("watermelon");
console.log(frutas);

// Método concat() para agregar elementos al Array (creando otro) --> Método INMUTABLE

let frutas2 = ["apple", "banana", "orange"];
const nuevasFrutas = frutas2.concat(["grape", "kiwi"]);
console.log(frutas2);
console.log(nuevasFrutas);

// Método Array.isArray(array) para analizar si el objeto sí es un array

const isArray = Array.isArray(frutas);
console.log(isArray);

// Sumar todos los elementos de un Array (números) con ciclo for

const numeros = [1, 2, 3, 4, 5, 6];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log(`La suma de los números del array es de: ${suma}`);
