function receivesAFunction(callback) {
  console.log(callback());
}

function returnsANamedFunction() {
  let namedFunction = () => console.log("Hello, I am named function");
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return () => console.log("Hello, I am anonymous function");
}
