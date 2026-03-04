function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counterA = createCounter();
counterA();
counterA();
const counterB = createCounter();
counterB();

function outer() {
  let message = "Hello, ";

  function inner(name) {
    console.log(message + name);
  }

  return inner;
}

const closureA = outer();
const closureB = outer();

closureA("Pepe");
closureB("Juan");
