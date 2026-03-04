const almuerzo = (proteina, verdura) => {
  return `${proteina} ${verdura}`;
};

console.log(almuerzo("chorizo", "espinacas"));

// Función tradicional
const greeting = function (name) {
  return `Hola ${name}`;
};

// Arrow Function - Explicit Return
const greeting2 = (name2) => {
  return `Hola ${name2}`;
};

// Arrow Function - Implicit Return
const greeting3 = (name3) => `Hola ${name3}`;
const greeting4 = (name4, lastname) => `Hola ${name4} ${lastname}`;

// Lexical Binding

const finctionalCharacter = {
  name: "Uncle Ben",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`);
  },
};

// La función tradicional sí reconoce el this y retorna el valor del name del objeto.
finctionalCharacter.messageWithTraditionalFunction(
  "With great power comes great responsability.",
);
// Arrow Function no reconce el this para el name dentro del objeto.
finctionalCharacter.messageWithArrowFunction("Beware of Doctor Octopus.");
