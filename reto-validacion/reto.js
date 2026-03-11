/*
1. El usuario debe poder ingresar su usuario y contraseña

2. El sistema debe ser capaz de validar si el usuario y contraseña
ingresados por el usuario existen en la base de datos

3. Si el usuario y constraseña son correctos, el sistema debe mostrar
un mensaje de bienvenida y mostrar el timeline del usuario.

4. Si el usuario y constraseña son incorrectos, el sistema debe mostrar
un mensaje de error y no mostrar ningún timeline

*/

const prompt = require("prompt-sync")();

const usersDatabase = [
  {
    username: "andres",
    password: "123",
  },
  {
    username: "caro",
    password: "456",
  },
  {
    username: "mariana",
    password: "789",
  },
];

const usersTimeline = [
  {
    username: "Estefany",
    timeline: "Me encanta JavaScript",
  },
  {
    username: "Oscar",
    timeline: "Bebeloper es lo mejor",
  },
  {
    username: "Mariana",
    timeline: "A mí me gusta más el café que el té",
  },
  {
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
  },
];

const username = prompt("¿Cuál es tu usuario?");
const password = prompt("¿Cuál es tu constraseña?");

function userExists(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    } else {
      return false;
    }
  }
}

function signIn(username, password) {
  if (userExists(username, password)) {
    console.log(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    console.log("Error, usuario o contraseña incorrectos");
  }
}

signIn(username, password);
