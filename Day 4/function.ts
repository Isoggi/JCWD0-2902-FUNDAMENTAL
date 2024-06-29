function fungsi(parameter: number) {
  return parameter ?? 0;
}

console.log(fungsi(6));

function greeting() {
  return "hello";
}

console.log(greeting());

const multiply = (a: number, b = 5) => a * b;

console.log(multiply(2));

function multiply2(a: number, b = 2) {
  return a * b;
}
console.log(multiply2(2));

function rested(a: any, b: any, ...many: any) {
  console.log(a, b, many);
  return many;
}

console.log(rested(1, 2, 3, 4, 5, 6));

function nestFunc(param: String) {
  function sayHello() {
    return "Hello";
  }
  function rtnParam() {
    return param;
  }

  return sayHello() + rtnParam();
}

function curryFunc(param: String) {
  const defaultMsg = "hello";
  return function () {
    return defaultMsg + param;
  };
}

console.log(nestFunc("world"));
console.log(curryFunc("world")());
