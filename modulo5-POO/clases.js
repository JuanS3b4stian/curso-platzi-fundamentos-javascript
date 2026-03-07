// Sintaxis Moderna para la creación de Clases en JS

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Instanciar una Clase (Manifestación de la Clase)

const persona1 = new Persona("Juan", 25);
persona1.saludar(); // persona1 hereda el método saludar y lo adapta a sus propiedades

class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  emitirSonido() {
    console.log("El animal hace un sonido");
  }
}

// Implementación de Herencia

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }

  emitirSonido() {
    console.log("El perro ladra");
  }

  correr() {
    console.log(
      `El perro ${this.nombre} corre, una máquina el perro ${this.nombre}`,
    );
  }
}

const perro1 = new Perro("Bobby", "perro", "Pug");
perro1.emitirSonido();
perro1.correr();

// Muestra los métodos de la clase en particular

console.log(Animal.prototype);
console.log(Perro.prototype);

// Métodos y Herencia Prototípica

// Declaramos el método como una función asociada a la instancia.
perro1.nuevoMetodo = function () {
  console.log("Este es un nuevo método");
};

/*
Si buscamos que un método esté disponible para cada instancia de una clase, 
se debe añadir directamente al prototipo de esa clase.
*/

Perro.prototype.segundoMetodo = function () {
  console.log("Este es otro método, pero para todo Perro");
};
console.log(Perro.prototype);

// Cadena de Prototipos

/*- perro1: Instancia. NO almacena métodos en el prototipo directamente.
  - Perro: Prototipo de clase. Aquí se encuentran los métodos compartidos por todas las instancias de Perro.
  - Animal: Clase base. Es la clase de la que Perro extiende.
  - Object: Objeto global. La raíz de todos los objetos en JS.
*/

console.log("Cadena");
let prototipoActual = Object.getPrototypeOf(perro1);
while (prototipoActual) {
  console.log(prototipoActual);
  prototipoActual = Object.getPrototypeOf(prototipoActual);
}