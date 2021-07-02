const sayHello  = function (name) {
  console.log("Hello, " + name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

const returnSayHello  = function (name) {
  return "Hello, " + name;
}

console.log(returnSayHello('John'));
