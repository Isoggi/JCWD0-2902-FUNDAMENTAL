/** @format */

let result: string | number = "";

function greet(str: string) {
  result = str;
}

function hello() {
  greet("hello");
}

function arigatou() {
  greet("arigatou");
}

arigatou();
hello();

console.log(result); //hello

//sequence 1
function calculator(a: number, b: number) {
  return a + b;
}

function displayer(something: any) {
  console.log(something);
}

displayer(calculator(5, 5)); //10

//sequence 2
function calculator2(a: number, b: number) {
  displayer(a + b);
}

calculator2(5, 5); //10

//callback
function calculator3(a: number, b: number, c: (something: any) => void) {
  c(a + b);
}

calculator3(5, 5, displayer);

//map => function/method yg return array

const arr = [1, 2, 3, 4];

const map = (value: number, index: number, self: number[]) => value;

const loop = (
  arr: number[],
  map: (value: number, index: number, self: number[]) => number
) => {
  const arr_result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    arr_result.push(map(arr[i], i, [...arr]));
  }
  return arr_result;
};

console.log(loop(arr, map));

setTimeout(message, 3000); //1

function message() {
  console.log("async is ez");
}

console.log("dor dor"); //2
setTimeout(() => {
  console.log("urutan 3");
}, 2000);
//selesai 2 3 1
