// Array de Urls a la API de pokeapi
const urls = [
  "https://pokeapi.co/api/v2/pokemon/bulbasaur",
  "https://pokeapi.co/api/v2/pokemon/charmander",
  "https://pokeapi.co/api/v2/pokemon/squirtle",
];

async function fetchNewData() {
  try {
    // Sintaxis y uso de ciclo for of en un array de urls
    for await (let url of urls) {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error)
  }
}
