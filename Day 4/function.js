/** @format */

function square(number) {
  return number * number;
} //function declaration

const square2 = function (number) {
  return number * number;
}; //function expression

console.log(square(5));
const result = square(10);
console.log(result);

function greeting() {
  const hello = "hellooo";
  return hello + a;
}
const a = 20;

console.log(greeting());
//default parameter
const multiply = (a, b = 5) => a * b;

console.log(multiply(2));

function multiply2(a, b = 1) {}

//rest parameter
function myFunc(a, b, ...manyArgs) {
  console.log(a, b, manyArgs);
}

myFunc(1, 2, 3, 4, 5, 6);
//nested function

function getMessage(firstName) {
  const a = 123;

  function sayHello() {
    return "hello " + firstName + ". " + a;
  }
  function welcomeMessage() {
    return "Welcome to Purwadhika";
  }
  return sayHello() + welcomeMessage();
}

console.log(getMessage("udin"));

//closure
function greeting(name) {
  const defaultMsg = "Hello ";
  return function () {
    return defaultMsg + name;
  };
}
const greetingsDavid = greeting("david");

console.log(greetingsDavid());
console.log(greeting("David")());

function multiplier(factor, op) {
  return function (number) {
    return op == "+" ? factor + number : factor - number;
  };
}
console.log(multiplier(5, "+")(2));

//recursive

function countDown(fromNumber) {
  console.log(fromNumber); // 3, 2, 1
  let nextNumber = fromNumber - 1; //2 1 0

  if (nextNumber > 0) {
    countDown(nextNumber); // countDown(2) countDown(1)
  }
}

countDown(3);
