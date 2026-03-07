// Sintaxis básica de la creación de un objeto en JS

const persona = {
  nombre: "John",
  edad: 30,
  direccion: {
    // Objeto anidado dentro de otro Objeto
    calle: "Avenida Insurgentes número 187",
    ciudad: "Ciudad de México",
  },
};

console.log(persona);

// Método dentro de los objetos

const persona2 = {
  nombre: "Juan",
  edad: 20,
  saludar: function () {
    return `Hola, mi nombre es ${this.nombre}`;
  },
};

console.log(persona2.saludar());

// Creación de Objetos

const persona01 = {
  nombre: "Pepe",
  edad: 28,
  direccion: {
    calle: "Avenida el Liceo",
    numero: 1234,
    ciudad: "Ciudad de México",
  },
  saludo: function () {
    `Hola, mi nombre es ${this.nombre}`;
  },
};

// Agregar y borrar propiedades y métodos

persona01.telefono = "+57 55555555";

persona01.despedir = () => {
  console.log("Chao Pescado");
};

delete persona01.telefono;
delete persona01.depedir;

// Crear múltiples objetos - Funciones CONSTRUCTORAS

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

// Crear instancias con new

const p = new Persona("Juan", "Pérez", 20);
const p2 = new Persona("Pedro", "Gómez", 17);

// Agregar propiedades individuales

p.nacionalidad = "Mexicano";

// Agregar propiedades para todas las instancias de un Objeto (Prototype)

Persona.prototype.telefono = "555-555-555";

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

// Ahora todas las instancias del objeto Persona tienen el método de saludar()
p.saludar();
p2.saludar();
