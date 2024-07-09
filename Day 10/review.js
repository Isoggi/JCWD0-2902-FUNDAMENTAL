/** @format */

const arr = [
  [1, 2, 3],
  {
    a: [
      () => {
        return [5, 4, 2];
      },
    ],
    b: 123,
  },
];
console.log(arr[1].a[0]()[2]);

let a = 12;
a++; //13
a *= 2; // 26
a = a + "2"; //262
console.log(a++ * 2); //524
console.log(a);

console.log("2" + 2);
console.log("2" * 2);
console.log("abc" * 5);
console.log("abc" * 5 + "hello");
console.log(true + undefined);
console.log(null + true); // 0 + 1
console.log(Number(null), Number(undefined));
console.log((true + true) * "123");
// for (let i = 0; i < 5; i--) {
//   console.log("hello");
// }

let b = 20;

do {
  b++;
} while (b < 0);

console.log(b);

while (b < 0) {
  b++;
}

console.log(b);

const arr2 = [5, 6, 7, 9, 10, [20, 12, 13, [23, 56]]];
arr2.slice(0, 2).push(5);

//method merubah origin array
//sort
//reverse
//push
//shift
//pop
//unshift

// arr2.length = 2;

console.log(arr2);
// [arr2[0], arr2[4]] = [arr2[4], arr2[0]];
[arr2[2], arr2[5][3][1]] = [arr2[5][3][1], arr2[2]];
console.log(arr2);

// function rename() {
//   let name = "bogel";
// }

// console.log(name);

function fa() {
  function fb() {
    return 2;
  }

  return fb;
}

console.log(0 && 88);
let str = "";
str = "user not found";
let username = "";
username = "nano";
console.log(username || str);

// data structure untuk lifo = stack
// fifo = queue
