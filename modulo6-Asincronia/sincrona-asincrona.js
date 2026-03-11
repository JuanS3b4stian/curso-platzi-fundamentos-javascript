function varFunc() {
  console.log(1);
  setTimeout(() => console.log(2), 0); // setTimeout mueve este console.log al Queue
  console.log(3);
}

varFunc();