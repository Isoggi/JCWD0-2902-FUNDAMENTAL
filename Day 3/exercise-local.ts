// let input = prompt("1. Masukkan angka ");
let inputNum = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${Number(inputNum)} x ${i} = ${Number(inputNum) * i} `);
}

let inputString = "maddam",
  inputLth = 0;
inputLth = inputString.length;
let isEvenLth = inputLth % 2 === 0;
let str_1 = "",
  str_2 = "";
for (let i = 0; i < 2; i++) {
  for (
    let j = i ? inputLth - 1 : 0;
    i
      ? j > (isEvenLth ? inputLth / 2 - 1 : inputLth / 2)
      : j < (isEvenLth ? inputLth / 2 : inputLth / 2 - 1);
    i ? j-- : j++
  ) {
    if (i) str_2 += inputString.charAt(j);
    else str_1 += inputString.charAt(j);
  }
  //   console.log(str_1, str_2);
}
console.log(
  `${inputString} → ${str_1 === str_2 ? "palindrome" : "not palindrome"}`
);

inputNum = 1000000;
console.log(`${inputNum} cm → ${inputNum / 100000} km`);

let counter = 0;
inputString = String(inputNum);
str_1 = "";
for (let i = inputString.length - 1; i >= 0; i--) {
  str_1 += inputString.charAt(i);
  if ((counter + 1) % 3 === 0) str_1 += ".";
  counter++;

  //   console.log(str_1, counter);
}
// console.log(str_1);
str_2 = "Rp. ";
counter = str_1.length - 1;
while (counter >= 0) {
  str_2 += str_1.charAt(counter);
  counter--;
  //   console.log(str_2);
}
console.log(`${inputNum} → ${str_2}` + ",00");

inputString = "Hello Hello World";
str_1 = "ell";

for (let i = 0; i < inputString.length; i++) {
  if (inputString.charAt(i) === str_1.charAt(0)) {
    let isSame = true;
    for (let index = 0; index < str_1.length; index++) {
      isSame = inputString.charAt(i + index) === str_1.charAt(index);
      if (!isSame) break;
    }
    if (isSame) {
      str_2 =
        inputString.substring(0, i) + inputString.substring(i + str_1.length);
      break;
    }
  }
}
console.log(
  `string = “${inputString}”, search string = “${str_1}” → “${str_2}”`
);

inputString = "hello hello world";
str_1 = "";
for (let index = 0; index < inputString.length; index++) {
  if (inputString.charAt(index - 1) === " " || index === 0) {
    str_1 += inputString.charAt(index).toUpperCase();
  } else str_1 += inputString.charAt(index);
}

console.log(`“${inputString}” → “${str_1}””`);

inputString = "hello hello";
str_1 = "";
for (let index = inputString.length - 1; index >= 0; index--) {
  str_1 += inputString.charAt(index);
}
console.log(`“${inputString}” → “${str_1}”`);

inputString = "The QuiCk BrOwN Fox";
str_1 = "";
str_2 = "";
for (let index = 0; index < inputString.length; index++) {
  str_1 = inputString.charAt(index);
  let isUpper = str_1.toUpperCase() === inputString.charAt(index);

  str_2 += isUpper ? str_1.toLowerCase() : str_1.toUpperCase();
}
console.log(`“${inputString}” → “${str_2}”`);

inputNum = 42;
let inputNum2 = 27;

console.log(
  `num1 = ${inputNum}, num2 = ${inputNum2} → ${
    inputNum > inputNum2 ? inputNum : inputNum2
  }`
);

// Write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
let inputNum3: number = 18;
let result:
  | string
  | number = `num1 = ${inputNum}, num2 = ${inputNum2}, num3 = ${inputNum3} →`;
if (inputNum > inputNum) [inputNum, inputNum] = [inputNum, inputNum];
if (inputNum > inputNum3) [inputNum, inputNum3] = [inputNum3, inputNum];
if (inputNum2 > inputNum3) [inputNum2, inputNum3] = [inputNum3, inputNum2];
//num1 = 18
//num2 = 27
//num3 = 42
console.log(result, inputNum, inputNum2, inputNum3);
