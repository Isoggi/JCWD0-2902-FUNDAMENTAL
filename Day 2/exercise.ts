/** @format */
// Write a code to convert celsius to fahrenheit
// ○ Example: 60 Celcius → 140 Fahrenheit
const celcius = 60;
console.log(`${celcius} Celcius → ${(celcius * 9) / 5 + 32} Fahrenheit`);

// Write a code to check whether the numb is odd or even
// Example: 25 → odd numb, 2 → even numb
const numb: number = 15;
console.log(`${numb} → ${numb % 2 ? "odd" : "even"} number`);

// Write a code to check whether the numb is prime numb or not
// Example: 7 → 7 is a prime numb
// Example: 6 → 6 is not a prime numb
let isPrime = true;
if (numb == 1) isPrime = false;
// 5 => 2 3 4 6
for (let i = 2; i < numb; i++)
  if (numb % i == 0) {
    isPrime = false;
    break;
  }

console.log(`${numb} → ${numb} is ${isPrime ? "prime" : "not a prime"} number`);

// Write a code to find the sum of the numbs 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 6
let sum: number = 0;
let result = `${numb} →`;
for (let i = 1; i <= numb; i++) {
  sum += i; // 1, 1 + 2
  result += i != numb ? ` ${i} +` : ` ${i} `;
}
console.log(result, "=", sum); // / 6 → 1 + 2 + 3 + 4 + 5 + 6 = 21
// Write a code to find factorial of a numb
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
let factorial = 1;
result = `${numb}! →`;
for (let i = numb; i >= 1; i--) {
  factorial *= i;
  result += i == 1 ? ` ${i}` : ` ${i} *`;
}
console.log(result, "=", factorial);

// Write a code to print the first N fibonacci numbs
// Example: 15 → 610
let number1: number = 0;
let number2: number = 1;
// 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610
for (
  let i = 1;
  i < numb;
  i++ // [number1, number2] = [number2, number1 + number2];
) {
  // const tmp = number1 + number2;
  // number1 = number2;
  // number2 = tmp;
  [number1, number2] = [number2, number1 + number2];
}
console.log(`${numb} → ${number2}`);
