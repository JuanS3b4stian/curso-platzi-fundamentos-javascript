// 1. Tipo Entero y Decimal
const entero = 21;
const decimal = 2.15;

// Ambos son Number
console.log(typeof entero);
console.log(typeof decimal);

// 2. Notación Científico
const cientifico = 5e3;
console.log(cientifico);

// 3. Infinitos y NaN
const infinito = Infinity;
const notANumber = NaN;
console.log(infinito);
console.log(notANumber);

// Operaciones Aritméticas

// 1. Suma, Resta, Multiplicación, División

const suma = 1 + 1;
const resta = 2 - 2;
const multiplicacion = 4 * 4;
const division = 10 / 10;
console.log(suma, resta, multiplicacion, division);

// 2. Módulo y Exponenciación
const modulo = 14 % 7;
const exponenciacion = 5 ** 4;
console.log(modulo);
console.log(exponenciacion);

// Precisión toFixed() para números decimales (float)
const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1));
console.log(resultado === 0.3); // JS no es preciso, OJO con esto

// Math (Objeto global) - Operaciones Avanzandas
const raizCuadradada = Math.sqrt(16);
const valorAbsoluto = Math.abs(-7);
const numeroAleatorio = Math.random();
const numeroAleatorioLimitado = Math.floor(Math.random() * 10) + 1;
console.log(raizCuadradada);
console.log(valorAbsoluto);
console.log(numeroAleatorio);
console.log(numeroAleatorioLimitado);
