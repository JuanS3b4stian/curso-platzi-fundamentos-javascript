const prompt = require("prompt-sync")();

let fruta = prompt("Digite una fruta y se le dará el valor de la misma: ");

switch (fruta) {
  case "papaya":
    console.log(`La ${fruta} cuesta $20.000`);
    break;
  case "mango":
    console.log(`El ${fruta} cuesta $10.000`);
    true;
    break;
  case "manzana":
    console.log(`La ${fruta} cuesta $40.000`);
    break;
  default:
    console.log(`${fruta} NO existe en nuestro catálogo`);
    break;
}
