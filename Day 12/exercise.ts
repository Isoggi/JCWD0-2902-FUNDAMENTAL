/** @format */

// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const majority = (arr: number[]) =>
  arr.find((value) => arr.filter((v) => v == value).length >= arr.length / 2);
console.log(majority([3, 2, 3, 2, 3, 1])); //3

//filter => value 3 => [3,3].length = 2 >= 2
// obj key : undefined
//loop arr if arr[0] ga ada masuk ke obj["3"] = 2
//obj { "3": 2, "2": 2, "5":1 } => loop for in check key > arr.length/2 = push ke arr baru

// Create a function to convert roman numeral to integer.
// Example 1:
// Input: s = "III”
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const roman = (input: string) =>
  input
    .toUpperCase()
    .split("")
    .reduce(
      (numeral, char, index, self) => {
        const obj = {
          I: 1,
          V: 5,
          X: 10,
          L: 50,
          C: 100,
          D: 500,
          M: 1000,
        } as { [k: string]: number };

        if (numeral.skip) {
          numeral.skip = false;
          return numeral; //skip 1 loop  {roman : 900, skip:false}
        }
        if (obj[char] < obj[self[index + 1]]) {
          numeral.roman = numeral.roman + obj[self[index + 1]] - obj[char]; // 0 + 900
          numeral.skip = true;
          return numeral;
        }
        numeral.roman += obj[char]; //roman = 58
        return numeral;
      },
      { roman: 0, skip: false }
    ).roman;
console.log(roman("im"), "roman");

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

const pascal = (n: number) =>
  [...Array(n)].reduce(
    (output, v, i) =>
      !i
        ? [[1]]
        : [
            ...output,
            [
              ...[...output[i - 1]].map(
                (_, index2, self) => _ + (self[index2 - 1] || 0)
              ),
              1,
            ],
          ],
    []
  );

//   [1,...x,1]

// console.log(pascal(3));
// [[1]]
//output = [[1]]
//i = 1
//output = [[1],[x,1]]
// x = output[i-1]
// x = output[0] = [1].map(_, index2, self)
//x = map => 1 + 0
//x = 1
//output = [[1],[1,1]]

//i = 2
//output = [[1],[1,1], [x,1]]
// x = output[i-1]
// x = output[1] = [1,1].map(_, index2, self)
//x = map => 1 + 0
//x = [1]
//x = map => 1 + 1
//x = [1,2]

//output = [[1],[1,1],[1,2,1]]

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maxProfit = (input: number[]) =>
  input.reduce(
    (max, value, i, self) =>
      max < Math.max(...self.slice(i + 1, self.length)) - value
        ? Math.max(...self.slice(i + 1, self.length)) - value
        : max,
    0
  );

//max < math.max

//[7,1,5,3,6,4]
// i = 2
//value = 6
// slice (1,length) = Math.max(4) = 4
// 5 < 6 - 4 ? 2
//max = 5

//var1 = math.min
//var2 = findindex min
//var3 = slice after index var2
//var4 = math.max var3

// 7,3,2,5,1

const prices = [7, 3, 2, 5, 1];

console.log(maxProfit(prices));
