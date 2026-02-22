// Capacadidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos de otra --> CALLBACK

function a() {}
function b(a) {}
b(a);

// 2. Retornar funciones

function a() {
  function b() {}
  return b;
}

// 3. Asignar funciones a variables --> EXPRESIÓN DE FUNCIÓN

const a = function () {};

// 4. Tener propiedad y método

function a() {}
const obj = {};
a.call(obj);

// 5. Anidar Funciones --> NESTED FUNCTIONS

function a() {
  function b() {
    function c() {}
    c();
  }
  b();
}
a();

// Almacenar funciones en objetos ¿Es posible?

const rocket = {
  nombre: "Falco 9",
  launchMessage: function launchMessage() {
    console.log("Depliegue exitoso!");
  },
};

rocket.launchMessage(); // --> Método
