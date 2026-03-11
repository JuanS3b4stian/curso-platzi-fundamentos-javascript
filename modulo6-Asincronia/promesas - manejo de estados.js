// Uso de then y catch con promesas (funciones de callback que las promesas usan)

// Pruebas en la consola del navegador al abrir el index.html
const promesa = new Promise((resolve, reject) => {
  const operationSuccessful = true;

  setTimeout(() => {
    if (operationSuccessful) {
      resolve("La operación fue exitosa");
    } else {
      reject("La operación falló");
    }
  }, 2000); // 2000 --> 2 segundos de espera en la ejecución
});

promesa
  // Para cuando la promesa se ejecuta correctamente
  .then((successMessage) => {
    console.log(successMessage);
  })
  // Cuando la promesa NO se ejecuta y hay error
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

// Crear y manejar promesas

const myPromise = new Promise((resolve, reject) => {
  const mockApiResponse = true; // Simulación de una respuesta de API

  setTimeout(() => {
    if (mockApiResponse) {
      resolve("Operación completada");
    } else {
      reject("Error");
    }
  }, 3000); // 3000 --> 3 segundos de espera en la ejecución
});

// then y catch para manejar el resultado

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));