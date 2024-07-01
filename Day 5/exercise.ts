console.log(
  "Write a function to get the lowest, highest and average value in the array (with and without sort function)."
);
let arr = [12, 5, 23, 18, 4, 45, 32];
console.log("With sort:");
console.log(
  `arr = ${arr} → {lowest : ${arr.sort()[0]}, highest: ${
    arr.sort()[arr.length - 1]
  }, average: ${arr.reduce((v, c) => v + c, 0) / arr.length}}`
);

console.log("Without  sort:");
let result: any;
result = console.log(
  `arr = ${arr} → {lowest : ${arr.sort()[0]}, highest: ${
    arr.sort()[arr.length - 1]
  }, average: ${arr.reduce((v, c) => v + c, 0) / arr.length}}`
);
