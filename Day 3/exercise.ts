/** @format */

// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9 x 1
// 9 x 2
// …
// 9 x 10
const numb: number = 9;
for (let i = 1; i <= 10; i++) console.log(`${numb} x ${i} = ${numb * i}`);
// Write a code to check whether a string is a palindrome or not.
// Example : ‘madam’ → palindrome
const str: string = "kucing";
let reverse: string = "";
for (let i = str.length - 1; i >= 0; i--) reverse += str.charAt(i); // g + n + i + c + u +k = gnicuk
console.log(`${str} → ${str == reverse ? "palindrome" : "not palindrome"}`);
// Write a code to convert centimeter to kilometer.
// Example : 100000 → “1 km”
const cm: number = 100000;
console.log(`${cm} cm → ${cm / 100000} km`);

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
const n = 1000;
const currency = 1000;
console.log(`${currency} → “Rp. ${currency.toLocaleString("id-ID")},00”`);

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”
const str2: string = "Hello world";
const search: string = "ll world";

console.log(
  `string = “${str2}”, search string = “${search}” → “${str2.replace(
    search,
    ""
  )}”`
);

// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”
let capitalize: string = "";
for (let i = 0; i < str2.length; i++) {
  if (i == 0 || str2.charAt(i - 1) == " ") {
    capitalize += str2.charAt(i).toUpperCase(); //H
  } else {
    capitalize += str2.charAt(i).toLowerCase(); // 'Hello World'
  }
}
console.log(`“${str2}” → “${capitalize}”`);

// Write a code to swap the case of each character from string
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
const str3: string = "The QuiCk BrOwN Fox";
let swap: string = "";
for (let i = 0; i < str3.length; i++) {
  if (str3.charAt(i) == str3.charAt(i).toUpperCase())
    //e == E
    swap += str3.charAt(i).toLowerCase(); // tHe
  else swap += str3.charAt(i).toUpperCase(); // tH
}

console.log(`‘${str3}’ -> ‘${swap}’`);

// Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42
let num1: number = 42;
let num2: number = 27;
console.log(`num1 = ${num1}, num2 = ${num2} → ${num1 > num2 ? num1 : num2}`);

// Write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
let num3: number = 18;
let result:
  | string
  | number = `num1 = ${num1}, num2 = ${num2}, num3 = ${num3} →`;
if (num1 > num2) [num1, num2] = [num2, num1];
if (num1 > num3) [num1, num3] = [num3, num1];
if (num2 > num3) [num2, num3] = [num3, num2];
//num1 = 18
//num2 = 27
//num3 = 42
console.log(result, num1, num2, num3);

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// Example : “hello” → 1
const value: any = "hello";
result = 3;
if (typeof value == "string") result = 1;
else if (typeof value == "number") result = 2;

console.log(`"${value}" → ${result}`);

// Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`

const str4 = "An apple a day keeps the doctor away";
console.log(`‘${str4}’ -> '${str4.replace(/a/gi, "*")}'`);

let a = 2;
let b = 3;
[a, b] = [b, 2000];
console.log(a, b);
