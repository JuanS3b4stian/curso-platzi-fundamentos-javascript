// Ciclo for (Inicializació - Condición - Incremento)

let frutas = ["mango", "papaya", "manzana", "kiwi", "uva", "fresa"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Ciclo for-of

// Variable - Objeto
for (let fruta of frutas) {
  console.log(fruta);
}

// Recorrer Objetos NO Iterables (Objects, Primitives...)

const usuario = { nombre: "Ana", edad: 25 };

// Usar Object.entries(), Object.keys() o Object.values()
for (const [clave, valor] of Object.entries(usuario)) {
  console.log(`${clave}: ${valor}`);
}

// Recorrer Objetos enumerables con forIn

const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1,
};

for (let fruta in listaDeCompras) {
  console.log(fruta); // --> Imprime claves
  console.log(listaDeCompras[fruta]); // --> Imprime valores
}

for (fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}

console.log(Object.entries(listaDeCompras));
console.log(Object.keys(listaDeCompras));
console.log(Object.values(listaDeCompras));

// Ciclo while

let cont = 0;

while (cont <= 10) {
  console.log(`Hola ${cont++}`);
}

// Ciclo dowhile

let contador = 0;

do {
  console.log(`Hola ${contador++}`);
} while (contador <= 10);
