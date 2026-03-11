// Async - Await otra forma de retornar promesas
// Más legible para leer los pasos de uso

// Fetch para evaluar promesa con base a pokeapi
function fetchData() {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

async function fetchData() {
  try {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
